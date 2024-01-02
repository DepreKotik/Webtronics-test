import {createRouter, createWebHistory} from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import ProfilePage from '@/pages/ProfilePage'
import TicketsPage from '@/pages/TicketsPage'

const routes = [
  {
    path: '/',
    component: TicketsPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/tickets',
    component: TicketsPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router