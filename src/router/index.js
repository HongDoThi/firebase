import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index,
    name: 'index'
  }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    Index
  })

  export default router