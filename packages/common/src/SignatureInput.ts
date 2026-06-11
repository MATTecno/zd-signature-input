import { Input } from '@zeedhi/common';
import {
  ISignatureInput,
  ISignatureInputEventParam,
  ISignatureInputEvents,
  SignatureInputSource,
} from './interfaces';

export class SignatureInput extends Input implements ISignatureInput {
  public accept: string = '.png,.jpg,.jpeg,image/png,image/jpeg';

  public backgroundColor: string = 'rgba(0, 0, 0, 0)';

  public events!: ISignatureInputEvents;

  public height: number | string = 220;

  public maxFileSize: number | string = 0;

  public maxWidth: number | string = 2.5;

  public minWidth: number | string = 0.5;

  public penColor: string = '#111827';

  public showUpload: boolean = true;

  constructor(props: ISignatureInput) {
    super(props);
    this.accept = this.getInitValue('accept', props.accept, this.accept);
    this.backgroundColor = this.getInitValue('backgroundColor', props.backgroundColor, this.backgroundColor);
    this.height = this.getInitValue('height', props.height, this.height);
    this.maxFileSize = this.getInitValue('maxFileSize', props.maxFileSize, this.maxFileSize);
    this.maxWidth = this.getInitValue('maxWidth', props.maxWidth, this.maxWidth);
    this.minWidth = this.getInitValue('minWidth', props.minWidth, this.minWidth);
    this.penColor = this.getInitValue('penColor', props.penColor, this.penColor);
    this.showUpload = this.getInitValue('showUpload', props.showUpload, this.showUpload);
    this.createAccessors();
  }

  public change(event?: Event, element?: any) {
    this.callEvent('change', {
      component: this,
      element,
      event,
      value: this.value,
    });
  }

  public input(event?: Event, element?: any) {
    if (this.value === this.lastInputValue) return;
    this.lastInputValue = this.value;
    this.callInputEvent({
      component: this,
      element,
      event,
      value: this.value,
    });
  }

  public clear(event?: Event, element?: any) {
    this.callSignatureEvent('clear', 'clear', undefined, undefined, event, element);
  }

  public upload(file: File, event?: Event, element?: any) {
    this.callSignatureEvent('upload', 'upload', file, undefined, event, element);
  }

  public error(error: unknown, event?: Event, element?: any) {
    this.callSignatureEvent('error', undefined, undefined, error, event, element);
  }

  private callSignatureEvent(
    eventName: 'clear' | 'upload' | 'error',
    source?: SignatureInputSource,
    file?: File,
    error?: unknown,
    event?: Event,
    element?: any,
  ) {
    const params: ISignatureInputEventParam = {
      component: this,
      element,
      error,
      event,
      file,
      source,
      value: this.value,
    };

    this.callEvent(eventName, params);
  }
}
