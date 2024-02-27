import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axiosClient from '../services/axios.service'
import type { IAuthTokens, TAuthInput } from '../types/auth'
import type { IUser } from '../types/user'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()

    const tokens = ref<IAuthTokens | null>(null)
    const isAuthorized = ref(false)

    const signup = async (data: TAuthInput) => {
      try {
        await axiosClient.post<IUser>('/register', data)

        router.push({ name: 'login' })
      } catch (error: any) {
        console.log(error)
      }
    }

    const signin = async (data: TAuthInput) => {
      try {
        const response = await axiosClient.post<IAuthTokens>('/login', data)
        console.log(response)
        const { refreshToken, accessToken } = response.data

        tokens.value = { refreshToken, accessToken }
        isAuthorized.value = true

        router.push({ name: 'home' })
      } catch (error: any) {
        console.log(error)
      }
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
