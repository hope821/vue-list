import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import List from '../components/List.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list',
    component: List
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
