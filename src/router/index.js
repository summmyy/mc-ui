import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import DashboardView from '../views/DashboardView.vue'
// import ShowsView from '../views/ShowsView.vue'
// import GenreView from '../views/GenreView.vue'
// import CountryView from '../views/CountryView.vue'
// import AddShowView from '../views/AddShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/ShowsView.vue')
    },
    {
      path: '/genre',
      name: 'genre',
      component: () => import('../views/GenreView.vue')
    },
    {
      path: '/country',
      name: 'country',
      component: () => import('../views/CountryView.vue')
    },
    {
      path: '/add-show',
      name: 'add-show',
      component: () => import('../views/AddShowView.vue')
    },
  ]
})

export default router
