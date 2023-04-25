import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import GamePage from '@/views/GamePage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    views: LoginPage
  },
  {
    path: '/',
    views: GamePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
