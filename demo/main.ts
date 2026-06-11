import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import '@zeedhi/vuetify/dist/zd-style.css';
import App from './App.vue';
import ZdSignatureInputPlugin from '../packages/vue/src';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(ZdSignatureInputPlugin);

new Vue({
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
  }),
  render: (h) => h(App),
}).$mount('#app');

