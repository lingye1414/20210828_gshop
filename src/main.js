import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/'
import store from './store/'

import App from './App'

Vue.use(VueRouter)

new Vue ({
  el: '#app',
  render: (h) => h(App),
  router,
  store
})
