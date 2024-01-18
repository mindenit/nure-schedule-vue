import { ref } from 'vue'
import router from '@/router'
import { transformAuthError } from '@/core/utils'
import type { TAuthInput } from '@/core/types/auth.types'
import type { IUser } from '@/core/types/user.types'
import axiosClient from '@/core/services/axios.service'

export function useSignup() {
  const isLoading = ref(false)
  const error = ref<any>(null)

  const signup = async (data: TAuthInput) => {
    isLoading.value = true
    try {
      await axiosClient.post<IUser>('/register', data)
      isLoading.value = false
      router.push({ path: 'home' })
    } catch (error: any) {
      isLoading.value = false
      error.value = transformAuthError(error.response.data)
    }
  }

  return { signup, isLoading, error }
}
