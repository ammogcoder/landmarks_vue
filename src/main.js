import Vue from 'vue';
import Buefy from 'buefy';
import AsyncComputed from 'vue-async-computed';
import VueProgressBar from 'vue-progressbar';
import App from './App';

Vue.use(Buefy);
Vue.use(AsyncComputed);
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px',
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
