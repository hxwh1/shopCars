import Vue from 'vue'
import VueRouter from 'vue-router'
import Cars from '@/views/CarView.vue'
import Goods from '@/views/GoodsView.vue'
import login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
  {
    path: '/car',
    name: 'car',
    component: Cars
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
