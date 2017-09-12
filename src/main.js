import Vue from 'vue';
import Buefy from 'buefy';
import AsyncComputed from 'vue-async-computed';
import App from './App';

Vue.use(Buefy);
Vue.use(AsyncComputed);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
