import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reiseziele',
    name: 'Reiseziele',
    component: () => import(/* webpackChunkName: "reiseziele" */ '../views/Reiseziele.vue')
  },
  {
    path: '/kalender',
    name: 'Kalender',
    component: () => import(/* webpackChunkName: "kalender" */ '../views/Kalender.vue')
  },
  {
    path: '/abstimmungen',
    name: 'Abstimmungen',
    component: () => import(/* webpackChunkName: "abstimmungen" */ '../views/Abstimmungen.vue')
  },
  {
    path: '/todo',
    name: 'ToDo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/ToDo.vue')
  },
  {
    path: '/kosten',
    name: 'Kosten',
    component: () => import(/* webpackChunkName: "kosten" */ '../views/Kosten.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "ticketsuche" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
