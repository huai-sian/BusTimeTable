import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router';
// import Loading from 'vue-loading-overlay'
import 'bootstrap'

Vue.use(VueAxios, axios)

// Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
