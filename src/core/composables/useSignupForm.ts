import { ref } from 'vue'
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
  const isDisabled = ref([emailValue.value, passwordValue.value].some((val) => val === ''))

  const handleEmailChange = (e: any) => {
    const value = e.target.value
    emailValue.value = value
  }

  const handlePasswordChange = (e: any) => {
    const value = e.target.value
    passwordValue.value = value
  }

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
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    isDisabled,
    validationError,
    isLoading,
    formError: error
  }
}
