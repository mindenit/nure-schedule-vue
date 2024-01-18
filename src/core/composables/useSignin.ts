import { ref } from 'vue'
import router from '@/router'
import { transformAuthError } from '@/core/utils'
import type { TAuthInput } from '@/core/types/auth.types'
import type { IAuthTokens } from '@/core/types/auth.types'
import axiosClient from '@/core/services/axios.service'
import { LOCAL_KEYS } from '../constants'

export function useSignin() {
  const isLoading = ref(false)
  const error = ref<any>(null)

  const signin = async (data: TAuthInput) => {
    isLoading.value = true
    try {
      const res = await axiosClient.post<IAuthTokens>('/login', data)
      localStorage.setItem(LOCAL_KEYS.AUTH_TOKENS, res.data.access_token as string)
      isLoading.value = false
      router.push({ path: 'home' })
    } catch (error: any) {
      isLoading.value = false
      error.value = transformAuthError(error.response.data.message)
    }
  }

  return { signin, isLoading, error }
}
