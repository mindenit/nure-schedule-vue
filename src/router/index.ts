import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'

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
        title: 'Вхід'
      },
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      meta: {
        title: 'Реєстрація'
      },
      name: 'signup',
      component: SignupView
    }
  ]
})

router.beforeEach((to) => {
  // @ts-ignore
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
