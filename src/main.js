import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


Vue.use(VueMaterial)


Vue.use(VueRouter)
new Vue({
  router,
  VueMaterial,
  el: '#app',
  render: h => h(App)
})
