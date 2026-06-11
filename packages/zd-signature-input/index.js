'use strict';

const commonPackage = require('@zeedhi/zd-signature-input-common');
const vuePackage = require('@zeedhi/zd-signature-input-vue');

const plugin = vuePackage.default || vuePackage;

Object.assign(plugin, vuePackage, commonPackage, {
  default: plugin,
  SignatureInput: commonPackage.SignatureInput || vuePackage.SignatureInput,
});

Object.defineProperty(plugin, '__esModule', {
  value: true,
});

module.exports = plugin;
