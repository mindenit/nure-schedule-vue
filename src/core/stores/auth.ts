import { nurekit } from '@/libs/nurekit'
import type { IAuthData, ITokens } from 'nurekit'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useSchedulesStore } from './schedule'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const tokens = ref<ITokens | null>(null)
    const scheduleStore = useSchedulesStore()
    const isAuthorized = ref(false)

    const signup = async (data: IAuthData) => {
      await nurekit.auth.signup(data)
    }

    const signin = async (data: IAuthData) => {
      const response = await nurekit.auth.login(data)

      const { accessToken, refreshToken } = response

      isAuthorized.value = true

      tokens.value = { accessToken, refreshToken }

      scheduleStore.recentSchedules = []
      scheduleStore.activeSchedule = null
    }

    const signout = () => {
      scheduleStore.recentSchedules = []
      scheduleStore.activeSchedule = null
      tokens.value = null
      isAuthorized.value = false
      localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE')
    }

    return { isAuthorized, tokens, signup, signin, signout }
  },
  {
    persist: true
  }
)
