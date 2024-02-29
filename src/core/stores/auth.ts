import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosClient from '../services/axios.service'
import type { IAuthTokens, TAuthInput } from '../types/auth'
import type { IUser } from '../types/user'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const tokens = ref<IAuthTokens | null>(null)
    const isAuthorized = ref(false)

    const signup = async (data: TAuthInput) => {
      await axiosClient.post<IUser>('/register', data)
    }

    const signin = async (data: TAuthInput) => {
      const response = await axiosClient.post<IAuthTokens>('/login', data)

      const { accessToken, refreshToken } = response.data

      isAuthorized.value = true

      tokens.value = { accessToken, refreshToken }
    }

    const signout = () => {
      tokens.value = null
      isAuthorized.value = false
    }

    return { isAuthorized, tokens, signup, signin, signout }
  },
  {
    persist: true
  }
)
