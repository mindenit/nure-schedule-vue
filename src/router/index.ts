import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/core/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {
        title: 'Головна'
      },
      name: 'home',
      component: HomeView
    },
    {
      path: '/filters',
      meta: {
        title: 'Фільтри'
      },
      name: 'filters',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/questions',
      meta: {
        title: 'Питання'
      },
      name: 'questions',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/changes',
      meta: {
        title: 'Зміни'
      },
      name: 'changes',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      meta: {
        title: 'Вхід',
        showAuthrized: false
      },
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      meta: {
        title: 'Реєстрація',
        showAuthrized: false
      },
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const auth = useAuthStore()

  if (!to.meta.showAuthrized && auth.isAuthorized) {
    return { name: 'home' }
  }

  // @ts-ignore
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
