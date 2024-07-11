import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {
        showAuthrized: true
      },
      name: 'home',
      component: HomeView
    },
    {
      path: '/filters',
      meta: {
        showAuthrized: true
      },
      name: 'filters',
      component: () => import('../views/FiltersView.vue')
    },
    // {
    //   path: '/questions',
    //   meta: {
    //     title: 'Питання'
    //   },
    //   name: 'questions',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/changes',
      meta: {
        showAuthrized: true
      },
      name: 'changes',
      component: () => import('../views/InDevelopmentView.vue')
    },
    // {
    //   path: '/login',
    //   meta: {
    //     showAuthrized: false
    //   },
    //   name: 'login',
    //   component: () => import('../views/LoginView.vue')
    // },
    // {
    //   path: '/signup',
    //   meta: {
    //     showAuthrized: false
    //   },
    //   name: 'signup',
    //   component: () => import('../views/SignupView.vue')
    // },
    {
      path: '/:pathMatch(.*)*',
      meta: {
        showAuthrized: true
      },
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/authors',
      meta: {
        showAuthrized: true
      },
      name: 'authors',
      component: () => import('../views/AuthorsView.vue')
    }
  ]
})

// router.beforeEach((to) => {
//   const auth = useAuthStore()

//   if (!to.meta.showAuthrized && auth.isAuthorized) {
//     return { name: 'home' }
//   }
// })

export default router
