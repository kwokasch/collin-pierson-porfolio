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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/ux-design',
      name: 'ux-design',
      component: () => import('../views/UXDesignView.vue')
    },
    {
      path: '/graphic-design',
      name: 'graphic-design',
      component: () => import('../views/GraphicDesignView.vue')
    },
  ]
})

export default router
