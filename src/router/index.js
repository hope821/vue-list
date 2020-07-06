import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import List from '../components/List.vue'
import ListUsers from '../components/users/ListUsers.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/users',
    component: ListUsers
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
