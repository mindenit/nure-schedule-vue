import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IAuthTokens, TAuthInput } from '../types/auth.types'
import type { IUser } from '../types/user.types'
import { transformAuthError } from '../utils'
import axiosClient from '../services/axios.service'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const router = useRouter()

    const authTokens = ref<IAuthTokens | null>(null)
    const isAuthorized = ref(false)

    const signup = async (data: TAuthInput) => {
      try {
        await axiosClient.post<IUser>('/register', data)

        isAuthorized.value = true

        router.push({ path: 'home' })
      } catch (error: any) {
        error.value = transformAuthError(error.response.data)
      }
    }

    const signin = async (data: TAuthInput) => {
      try {
        const response = await axiosClient.post<IAuthTokens>('/login', data)
        const { refresh_token, access_token } = response.data

        authTokens.value = { access_token, refresh_token }
        isAuthorized.value = true

        router.push({ path: 'home' })
      } catch (error: any) {
        error.value = transformAuthError(error.response.data.message)
      }
    }

    const signout = () => {
      authTokens.value = null
      isAuthorized.value = false
    }

    return { isAuthorized, signup, signin, signout }
  },
  {
    persist: true
  }
)
