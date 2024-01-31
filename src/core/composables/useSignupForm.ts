import type { IValidationError } from '@/core/types/validation'
import { getFormData, handleFieldError } from '@/core/utils'
import { useMutation } from '@tanstack/vue-query'
import { flatten, parse } from 'valibot'
import { computed, ref } from 'vue'
import { authSchema } from '../validations/auth'
import { useAuthStore } from '../stores/auth'
import type { TAuthInput } from '../types/auth'

export const useSignupForm = () => {
  const authStore = useAuthStore()
  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: TAuthInput) => await authStore.signup(data)
  })

  const emailValue = ref('')
  const passwordValue = ref('')
  const validationError = ref<IValidationError | null>(null)
  const isDisabled = computed(() => {
    return [emailValue.value, passwordValue.value].some((val) => val === '')
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = getFormData(e)

    try {
      const parsedData = parse(authSchema, data)
      await mutateAsync(parsedData)
    } catch (error: any) {
      handleFieldError({
        error: flatten(error),
        names: Object.keys(data),
        callback(err) {
          validationError.value = err
        }
      })
    }
  }

  return {
    emailValue,
    passwordValue,
    handleSubmit,
    isDisabled,
    validationError,
    isPending,
    formError: error
  }
}
