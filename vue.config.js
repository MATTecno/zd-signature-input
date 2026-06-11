const isLibraryBuild = process.env.ZD_SIGNATURE_LIB_BUILD === 'true';

module.exports = {
  productionSourceMap: false,
  transpileDependencies: [
    'signature_pad',
  ],
  configureWebpack: isLibraryBuild
    ? {
      externals: {
        '@zeedhi/common': '@zeedhi/common',
        '@zeedhi/core': '@zeedhi/core',
        '@zeedhi/vuetify': '@zeedhi/vuetify',
        '@marcelodl49/zd-signature-input-common': '@marcelodl49/zd-signature-input-common',
        vue: 'vue',
        'vue-class-component': 'vue-class-component',
        'vue-property-decorator': 'vue-property-decorator',
      },
    }
    : {},
  chainWebpack: (config) => {
    config.module
      .rule('signature-pad-js')
      .test(/node_modules[\\/]signature_pad[\\/].*\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: [
          '@babel/preset-env',
        ],
        plugins: [
          '@babel/plugin-transform-class-properties',
        ],
      });
  },
};

