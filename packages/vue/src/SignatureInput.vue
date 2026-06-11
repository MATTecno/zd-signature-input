<template>
  <div
    v-show="instance.isVisible"
    :id="instance.name"
    :name="instance.name"
    :class="['zd-signature-input', instance.cssClass, { 'zd-signature-input--inactive': inactive }]"
    :style="instance.cssStyle"
  >
    <v-input
      ref="instance"
      class="zd-signature-input__validation"
      :disabled="instance.disabled"
      :hide-details="hideDetails"
      :hint="instance.hint"
      :persistent-hint="instance.persistentHint"
      :rules="rules"
      :value="instance.value"
    >
      <div class="zd-signature-input__field">
        <label
          v-if="instance.showLabel && instance.label"
          class="zd-signature-input__label"
          :for="`${instance.name}_canvas`"
        >
          {{ instance.label }}
        </label>
        <div class="zd-signature-input__body">
          <div class="zd-signature-input__surface" :style="surfaceStyle">
            <canvas
              :id="`${instance.name}_canvas`"
              ref="canvas"
              class="zd-signature-input__canvas"
              :style="canvasStyle"
              :aria-label="instance.label"
              :tabindex="inactive ? -1 : 0"
              @blur="blur"
              @keydown="keydown"
              @keyup="keyup"
            ></canvas>
          </div>
          <div class="zd-signature-input__actions">
            <v-tooltip v-if="instance.showUpload" bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  small
                  type="button"
                  :disabled="inactive"
                  v-on="on"
                  @click="openFileInput"
                >
                  <v-icon small>mdi-upload</v-icon>
                </v-btn>
              </template>
              <span>Enviar assinatura</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  small
                  type="button"
                  :disabled="inactive || !hasSignatureValue"
                  v-on="on"
                  @click="clearSignature"
                >
                  <v-icon small>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Limpar assinatura</span>
            </v-tooltip>
            <input
              ref="fileInput"
              class="zd-signature-input__file"
              type="file"
              :accept="instance.accept"
              @change="handleFileChange"
            />
          </div>
        </div>
      </div>
    </v-input>
  </div>
</template>

<script lang="ts" src="./ZdSignatureInput.ts"></script>

<style lang="scss">
.zd-signature-input {
  width: 100%;
}

.zd-signature-input__validation {
  display: block;
}

.zd-signature-input__field {
  width: 100%;
}

.zd-signature-input__label {
  color: rgba(0, 0, 0, 0.6);
  display: block;
  font-size: 12px;
  line-height: 1.25;
  margin-bottom: 6px;
}

.theme--dark .zd-signature-input__label {
  color: rgba(255, 255, 255, 0.7);
}

.zd-signature-input__body {
  align-items: end;
  display: grid;
  gap: 8px;
  grid-template-columns: minmax(0, 1fr) 34px;
  width: 100%;
}

.zd-signature-input__surface {
  border: 1px solid rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

.theme--dark .zd-signature-input__surface {
  border-color: rgba(255, 255, 255, 0.34);
}

.zd-signature-input--inactive .zd-signature-input__surface {
  opacity: 0.56;
}

.zd-signature-input__canvas {
  cursor: crosshair;
  display: block;
  touch-action: none;
  width: 100%;
}

.zd-signature-input--inactive .zd-signature-input__canvas {
  cursor: default;
}

.zd-signature-input__actions {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  min-height: 72px;
}

.zd-signature-input__file {
  display: none;
}

@media (max-width: 380px) {
  .zd-signature-input__body {
    gap: 6px;
    grid-template-columns: minmax(0, 1fr) 32px;
  }

  .zd-signature-input__actions {
    min-height: 68px;
  }
}
</style>
