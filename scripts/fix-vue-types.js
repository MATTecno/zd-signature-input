'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const vueDistDir = path.join(rootDir, 'packages/vue/dist');
const typesDir = path.join(rootDir, 'packages/vue/types');

fs.mkdirSync(typesDir, { recursive: true });

fs.writeFileSync(
  path.join(typesDir, 'index.d.ts'),
  `import { PluginObject, VueConstructor } from 'vue';
import { SignatureInput } from '@zeedhi/zd-signature-input-common';

export declare const ZdSignatureInput: VueConstructor;
export { SignatureInput };
export * from '@zeedhi/zd-signature-input-common';

declare const plugin: PluginObject<unknown>;

export default plugin;
`,
  'utf8',
);

fs.writeFileSync(
  path.join(typesDir, 'SignatureInput.vue.d.ts'),
  `import { VueConstructor } from 'vue';

declare const component: VueConstructor;

export default component;
`,
  'utf8',
);

[
  'signature-input-vue.common.js',
  'signature-input-vue.umd.js',
].forEach((fileName) => {
  const filePath = path.join(vueDistDir, fileName);
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, content.replace(/[ \t]+$/gm, ''), 'utf8');
});

console.log('Vue package artifacts normalized.');
