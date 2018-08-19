// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ViserVue from 'viser-vue';
import store from './store';
import '../mock/mock.js';

Vue.use(Vuex);
Vue.use(Antd);
Vue.use(ViserVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});
