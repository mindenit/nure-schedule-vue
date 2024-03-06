import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosClient from '../services/axios.service'
import type { IAuthTokens, TAuthInput } from '../types/auth'
import type { IUser } from '../types/user'
import { useSchedulesStore } from './schedule'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const tokens = ref<IAuthTokens | null>(null)
    const scheduleStore = useSchedulesStore()
    const isAuthorized = ref(false)

    const signup = async (data: TAuthInput) => {
      await axiosClient.post<IUser>('/register', data)
    }

    const signin = async (data: TAuthInput) => {
      const response = await axiosClient.post<IAuthTokens>('/login', data)

      const { accessToken, refreshToken } = response.data

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
