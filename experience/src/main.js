import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import fastclick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
// import $ from 'jquery';

// import 'common/stylus/index.styl'
Vue.use(VueLazyLoad, {
    loading: require("common/image/default.png")
})

import 'common/sass/index.sass';

fastclick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
