<template>
  <v-app>
    <v-main>
      <main class="signature-demo">
        <section class="signature-demo__workspace">
          <div class="signature-demo__editor">
            <header class="signature-demo__header">
              <div>
                <p class="signature-demo__eyebrow">Zeedhi Store Package</p>
                <h1>ZdSignatureInput</h1>
              </div>
              <v-chip small label color="teal" text-color="white">{{ outputState }}</v-chip>
            </header>

            <zd-signature-input
              name="assinatura"
              label="Assinatura"
              :height="signatureHeight"
              :show-upload="true"
              :max-file-size="2097152"
              background-color="#ffffff"
              pen-color="#111827"
              @input="handleInput"
              @clear="handleClear"
              @upload="handleUpload"
              @error="handleError"
            />
          </div>

          <aside class="signature-demo__output">
            <div class="signature-demo__output-bar">
              <strong>Output</strong>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon small :disabled="!signature" v-on="on" @click="copyOutput">
                    <v-icon small>mdi-content-copy</v-icon>
                  </v-btn>
                </template>
                <span>Copiar Data URL</span>
              </v-tooltip>
            </div>

            <div class="signature-demo__preview">
              <img v-if="signature" :src="signature" alt="Assinatura capturada" />
              <span v-else>Nenhuma assinatura</span>
            </div>

            <v-textarea
              readonly
              outlined
              dense
              :rows="outputRows"
              no-resize
              label="Data URL PNG"
              :value="shortOutput"
            />

            <v-alert v-if="message" dense text :type="messageType">{{ message }}</v-alert>
          </aside>
        </section>
      </main>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    const viewportHeight = typeof window === 'undefined' ? 720 : window.innerHeight;
    const viewportWidth = typeof window === 'undefined' ? 1024 : window.innerWidth;

    return {
      message: '',
      messageType: 'info' as 'info' | 'success' | 'error',
      signature: '',
      viewportHeight,
      viewportWidth,
    };
  },
  computed: {
    outputState(): string {
      return this.signature ? 'Data URL PNG' : 'Vazio';
    },
    outputRows(): number {
      if (this.viewportWidth <= 600) return 4;
      if (this.viewportHeight <= 520) return 3;
      return 8;
    },
    signatureHeight(): number {
      if (this.viewportHeight <= 520) return 150;
      if (this.viewportWidth <= 380) return 170;
      if (this.viewportWidth <= 600) return 200;
      return 240;
    },
    shortOutput(): string {
      if (!this.signature) return '';
      return this.signature.length > 360 ? `${this.signature.slice(0, 360)}...` : this.signature;
    },
  },
  mounted() {
    this.updateViewport();
    window.addEventListener('resize', this.updateViewport);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateViewport);
  },
  methods: {
    async copyOutput() {
      if (!this.signature || !navigator.clipboard) return;
      await navigator.clipboard.writeText(this.signature);
      this.messageType = 'success';
      this.message = 'Output copiado.';
    },
    handleClear() {
      this.signature = '';
      this.messageType = 'info';
      this.message = 'Assinatura limpa.';
    },
    handleError(error: Error) {
      this.messageType = 'error';
      this.message = error && error.message ? error.message : 'Nao foi possivel processar a assinatura.';
    },
    handleInput(payload: string | { component?: { value?: string }; value?: string }) {
      if (typeof payload === 'string') {
        this.signature = payload;
      } else {
        this.signature = payload.value || (payload.component && payload.component.value) || '';
      }
      this.message = '';
    },
    handleUpload() {
      this.messageType = 'success';
      this.message = 'Imagem carregada.';
    },
    updateViewport() {
      this.viewportHeight = window.innerHeight;
      this.viewportWidth = window.innerWidth;
    },
  },
});
</script>

<style lang="scss">
html {
  background: #f4f7f6;
}

.signature-demo {
  background:
    linear-gradient(180deg, rgba(15, 118, 110, 0.08), rgba(244, 247, 246, 0) 320px),
    #f4f7f6;
  min-height: 100vh;
  padding: 32px;
}

.signature-demo__workspace {
  align-items: start;
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1fr) 380px;
  margin: 0 auto;
  max-width: 1120px;
}

.signature-demo__editor,
.signature-demo__output {
  background: #ffffff;
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-radius: 8px;
  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
  padding: 20px;
}

.signature-demo__header,
.signature-demo__output-bar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.signature-demo__header h1 {
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0;
}

.signature-demo__eyebrow {
  color: #0f766e;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  margin: 0 0 4px;
  text-transform: uppercase;
}

.signature-demo__preview {
  align-items: center;
  background: #f8fafc;
  border: 1px dashed rgba(17, 24, 39, 0.22);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  min-height: 148px;
  overflow: hidden;
}

.signature-demo__preview img {
  display: block;
  max-height: 140px;
  max-width: 100%;
}

.signature-demo__preview span {
  color: #64748b;
  font-size: 14px;
}

@media (max-width: 900px) {
  .signature-demo {
    padding: 16px;
  }

  .signature-demo__workspace {
    grid-template-columns: 1fr;
    max-width: 620px;
  }
}

@media (max-width: 900px) and (orientation: landscape) {
  .signature-demo {
    padding: 12px;
  }

  .signature-demo__workspace {
    gap: 12px;
    grid-template-columns: minmax(0, 1fr) minmax(240px, 0.72fr);
    max-width: none;
  }

  .signature-demo__editor,
  .signature-demo__output {
    padding: 14px;
  }

  .signature-demo__header,
  .signature-demo__output-bar {
    margin-bottom: 10px;
  }

  .signature-demo__preview {
    min-height: 92px;
  }

  .signature-demo__preview img {
    max-height: 86px;
  }
}

@media (max-width: 480px) {
  .signature-demo {
    padding: 10px;
  }

  .signature-demo__editor,
  .signature-demo__output {
    border-radius: 6px;
    padding: 14px;
  }

  .signature-demo__header {
    align-items: flex-start;
    gap: 12px;
  }

  .signature-demo__header h1 {
    font-size: 22px;
  }

  .signature-demo__preview {
    min-height: 110px;
  }

  .signature-demo__preview img {
    max-height: 104px;
  }
}
</style>
