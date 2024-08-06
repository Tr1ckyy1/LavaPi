import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/:userId',
      name: 'user-details',
      component: () => import('../views/UserShow.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateUser.vue')
    },
    {
      name: 'error',
      path: '/error/:status',
      component: () => import('../views/ErrorPage.vue')
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ],
  scrollBehavior(_, _1, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

export default router
