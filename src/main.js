import Vue from 'vue';
import Buefy from 'buefy';
import App from './App';

Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
