import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import fastclick from 'fastclick';

import './common/sass/reset.sass';

Vue.config.productionTip = false;
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
