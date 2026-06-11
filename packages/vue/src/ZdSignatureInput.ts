import SignaturePad from 'signature_pad';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { ZdInput } from '@zeedhi/vuetify';
import { SignatureInput } from '@zeedhi/zd-signature-input-common';

@Component
export default class ZdSignatureInput extends ZdInput {
  @Prop({ type: String, default: '.png,.jpg,.jpeg,image/png,image/jpeg' }) public accept!: string;

  @Prop({ type: String, default: 'rgba(0, 0, 0, 0)' }) public backgroundColor!: string;

  @Prop({ type: [Number, String], default: 220 }) public height!: number | string;

  @Prop({ type: [Number, String], default: 0 }) public maxFileSize!: number | string;

  @Prop({ type: [Number, String], default: 2.5 }) public maxWidth!: number | string;

  @Prop({ type: [Number, String], default: 0.5 }) public minWidth!: number | string;

  @Prop({ type: String, default: '#111827' }) public penColor!: string;

  @Prop({ type: Boolean, default: true }) public showUpload!: boolean;

  public hasSignatureValue: boolean = false;

  public instance!: SignatureInput;

  public instanceType: typeof SignatureInput = SignatureInput;

  private ignoreValueWatch: boolean = false;

  private resizeObserver: any = null;

  private resizeTimeout: number = 0;

  private signaturePad: SignaturePad | null = null;

  private strokeCommitTimeout: number = 0;

  public mounted() {
    this.hasSignatureValue = Boolean(this.instance.value);
    this.mountInputValidation();
    this.$nextTick(() => {
      this.createSignaturePad();
      this.bindResize();
      this.resizeCanvas();
    });
  }

  public beforeDestroy() {
    this.unbindResize();
    window.clearTimeout(this.strokeCommitTimeout);
    if (this.signaturePad) {
      this.signaturePad.removeEventListener('endStroke', this.handleStrokeEnd);
      this.signaturePad.removeEventListener('afterUpdateStroke', this.handleStrokeUpdate);
      this.signaturePad.off();
      this.signaturePad = null;
    }

    const superBeforeDestroy = Object.getPrototypeOf(ZdSignatureInput.prototype).beforeDestroy;
    if (superBeforeDestroy) {
      superBeforeDestroy.call(this);
    }
  }

  public get canvasStyle() {
    return {
      height: this.toCssSize(this.instance.height),
    };
  }

  public get hideDetails() {
    return !this.instance.showHelper && !this.instance.alwaysShowError;
  }

  public get inactive() {
    return Boolean(this.instance.disabled || this.instance.readonly);
  }

  public get surfaceStyle() {
    return {
      backgroundColor: this.instance.backgroundColor,
    };
  }

  public clearSignature(event?: Event) {
    if (this.inactive) return;
    if (this.signaturePad) {
      this.signaturePad.clear();
    }
    this.commitValue('', event);
    this.instance.clear(event, this.$el);
  }

  public openFileInput() {
    if (this.inactive || !this.instance.showUpload) return;
    const input = this.$refs.fileInput as HTMLInputElement | undefined;
    if (input) {
      input.click();
    }
  }

  public async handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (!file || this.inactive) return;

    try {
      this.validateFile(file);
      const dataUrl = await this.readFileAsDataUrl(file);
      const pngDataUrl = await this.normalizeImage(dataUrl);
      await this.renderDataUrl(pngDataUrl);
      this.commitValue(pngDataUrl, event);
      this.instance.upload(file, event, this.$el);
    } catch (error) {
      this.instance.error(error, event, this.$el);
      this.$emit('error', error);
    } finally {
      input.value = '';
    }
  }

  @Watch('instance.penColor')
  public updatePenColor(value: string) {
    if (this.signaturePad) {
      this.signaturePad.penColor = value;
    }
  }

  @Watch('instance.backgroundColor')
  public async updateBackgroundColor(value: string) {
    if (this.signaturePad) {
      this.signaturePad.backgroundColor = value;
      await this.redrawCurrentValue();
    }
  }

  @Watch('instance.disabled')
  @Watch('instance.readonly')
  public updateInputState() {
    this.togglePadEvents();
  }

  @Watch('instance.height')
  public handleHeightChange() {
    this.scheduleResize();
  }

  @Watch('height')
  public syncHeightProp(value: number | string) {
    if (!this.instance) return;
    this.instance.height = value;
    this.scheduleResize();
  }

  @Watch('instance.maxWidth')
  @Watch('instance.minWidth')
  public updateStrokeWidth() {
    if (!this.signaturePad) return;
    this.signaturePad.maxWidth = Number(this.instance.maxWidth) || 2.5;
    this.signaturePad.minWidth = Number(this.instance.minWidth) || 0.5;
  }

  @Watch('instance.value')
  public async handleInstanceValueChange(value: string) {
    this.hasSignatureValue = Boolean(value);
    if (this.ignoreValueWatch || !this.signaturePad) return;
    await this.renderDataUrl(value || '');
  }

  private bindResize() {
    window.addEventListener('resize', this.scheduleResize);
    if (typeof (window as any).ResizeObserver === 'function') {
      this.resizeObserver = new (window as any).ResizeObserver(this.scheduleResize);
      this.resizeObserver.observe(this.$el);
    }
  }

  private commitValue(value: string, event?: Event) {
    this.ignoreValueWatch = true;
    this.hasSignatureValue = Boolean(value);
    this.instance.value = value;
    this.$emit('update:value', value);
    this.$emit('input', value);
    this.instance.input(event, this.$el);
    this.instance.change(event, this.$el);
    this.$nextTick(() => {
      this.ignoreValueWatch = false;
    });
  }

  private createSignaturePad() {
    const canvas = this.getCanvas();
    if (!canvas) return;

    this.signaturePad = new SignaturePad(canvas, {
      backgroundColor: this.instance.backgroundColor,
      maxWidth: Number(this.instance.maxWidth) || 2.5,
      minWidth: Number(this.instance.minWidth) || 0.5,
      penColor: this.instance.penColor,
    });

    this.signaturePad.addEventListener('endStroke', this.handleStrokeEnd);
    this.signaturePad.addEventListener('afterUpdateStroke', this.handleStrokeUpdate);
    if (this.inactive) {
      this.signaturePad.off();
    }
  }

  private fillBackground(context: CanvasRenderingContext2D, width: number, height: number) {
    if (!this.shouldPaintBackground()) return;
    context.fillStyle = this.instance.backgroundColor;
    context.fillRect(0, 0, width, height);
  }

  private getCanvas() {
    return this.$refs.canvas as HTMLCanvasElement | undefined;
  }

  private getCanvasHeight() {
    const parsedHeight = Number(this.instance.height);
    return parsedHeight > 0 ? parsedHeight : 220;
  }

  private getCanvasWidth() {
    const canvas = this.getCanvas();
    const parentWidth = canvas && canvas.parentElement ? canvas.parentElement.clientWidth : 0;
    return parentWidth || (canvas ? canvas.offsetWidth : 0) || 600;
  }

  private handleStrokeEnd = (event: Event) => {
    window.clearTimeout(this.strokeCommitTimeout);
    this.commitSignatureFromPad(event);
  };

  private handleStrokeUpdate = (event: Event) => {
    if (!this.signaturePad || this.signaturePad.isEmpty()) return;

    if (!this.hasSignatureValue) {
      this.commitSignatureFromPad(event);
      return;
    }

    window.clearTimeout(this.strokeCommitTimeout);
    this.strokeCommitTimeout = window.setTimeout(() => this.commitSignatureFromPad(event), 120);
  };

  private commitSignatureFromPad(event?: Event) {
    if (!this.signaturePad || this.signaturePad.isEmpty()) return;

    const value = this.signaturePad.toDataURL('image/png');
    if (value === this.instance.value) return;

    this.commitValue(value, event);
  }

  private normalizeImage(dataUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        const width = this.getCanvasWidth();
        const height = this.getCanvasHeight();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('Nao foi possivel preparar a imagem da assinatura.'));
          return;
        }

        canvas.width = width;
        canvas.height = height;
        this.fillBackground(context, width, height);

        const scale = Math.min(width / image.width, height / image.height);
        const drawWidth = image.width * scale;
        const drawHeight = image.height * scale;
        const x = (width - drawWidth) / 2;
        const y = (height - drawHeight) / 2;

        context.drawImage(image, x, y, drawWidth, drawHeight);
        resolve(canvas.toDataURL('image/png'));
      };
      image.onerror = () => reject(new Error('Arquivo de assinatura invalido.'));
      image.src = dataUrl;
    });
  }

  private mountInputValidation() {
    const inputRef = this.$refs.instance as any;
    (this as any).inputRef = inputRef;

    if (!inputRef) return;

    this.instance.setViewValidate((force: boolean) => {
      const isValid = inputRef.validate(force);
      (this as any).hasErrors = !isValid;
      return isValid;
    });
    this.instance.setViewResetValidation(inputRef.resetValidation);
  }

  private readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('Nao foi possivel ler o arquivo da assinatura.'));
      reader.readAsDataURL(file);
    });
  }

  private async redrawCurrentValue() {
    const value = this.instance.value || '';
    await this.renderDataUrl(value);
  }

  private async renderDataUrl(dataUrl: string) {
    if (!this.signaturePad) return;
    this.signaturePad.clear();
    if (!dataUrl) return;

    try {
      await this.signaturePad.fromDataURL(dataUrl, {
        height: this.getCanvasHeight(),
        ratio: 1,
        width: this.getCanvasWidth(),
      });
    } catch (error) {
      this.instance.error(error, undefined, this.$el);
      this.$emit('error', error);
    }
  }

  private resizeCanvas() {
    const canvas = this.getCanvas();
    if (!canvas) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const width = this.getCanvasWidth();
    const height = this.getCanvasHeight();
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext('2d');
    if (context) {
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    this.redrawCurrentValue();
  }

  private scheduleResize = () => {
    window.clearTimeout(this.resizeTimeout);
    this.resizeTimeout = window.setTimeout(() => this.resizeCanvas(), 100);
  };

  private shouldPaintBackground() {
    const value = String(this.instance.backgroundColor || '').replace(/\s/g, '').toLowerCase();
    return Boolean(value && value !== 'transparent' && value !== 'rgba(0,0,0,0)');
  }

  private toCssSize(value: number | string) {
    return typeof value === 'number' ? `${value}px` : value;
  }

  private togglePadEvents() {
    if (!this.signaturePad) return;
    if (this.inactive) {
      this.signaturePad.off();
    } else {
      this.signaturePad.on();
    }
  }

  private unbindResize() {
    window.removeEventListener('resize', this.scheduleResize);
    window.clearTimeout(this.resizeTimeout);
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  private validateFile(file: File) {
    const accept = String(this.instance.accept || '').split(',').map((item) => item.trim().toLowerCase()).filter(Boolean);
    const fileName = file.name.toLowerCase();
    const fileType = file.type.toLowerCase();
    const isAccepted = !accept.length || accept.some((item) => {
      if (item.startsWith('.')) return fileName.endsWith(item);
      if (item.endsWith('/*')) return fileType.startsWith(item.replace('*', ''));
      return fileType === item;
    });

    if (!isAccepted) {
      throw new Error('Formato de arquivo invalido para assinatura.');
    }

    const maxFileSize = Number(this.instance.maxFileSize);
    if (maxFileSize > 0 && file.size > maxFileSize) {
      throw new Error('Arquivo de assinatura maior que o permitido.');
    }
  }
}
