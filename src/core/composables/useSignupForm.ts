import { ref, computed } from 'vue'
import { useSignup } from '.'
import type { IValidationError } from '@/core/types/validation.types'
import { getFormData, handleFieldError } from '@/core/utils'
import { flatten, parse } from 'valibot'
import { authSchema } from '../schemas/auth.schema'

export const useSignupForm = () => {
  const { signup, isLoading, error } = useSignup()
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
      await signup(parsedData)
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
    isLoading,
    formError: error
  }
}
