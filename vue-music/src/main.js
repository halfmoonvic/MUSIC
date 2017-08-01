import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
// import store from './store';
import fastclick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';



// import 'common/stylus/index.styl'
import 'common/sass/index.sass';

fastclick.attach(document.body);

Vue.use(VueLazyLoad, {
    loading: require("common/image/default.png")
})
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App),
});
