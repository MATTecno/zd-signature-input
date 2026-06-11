import { PluginObject, VueConstructor } from 'vue';
import { InputFactory } from '@zeedhi/common';
import { SignatureInput } from '@marcelodl49/zd-signature-input-common';
import ZdSignatureInput from './SignatureInput.vue';

export { default as ZdSignatureInput } from './SignatureInput.vue';
export { SignatureInput };
export * from '@marcelodl49/zd-signature-input-common';

const plugin: PluginObject<unknown> = {
  install(Vue: VueConstructor) {
    InputFactory.register('ZdSignatureInput', SignatureInput);
    Vue.component('ZdSignatureInput', ZdSignatureInput);
  },
};

export default plugin;

