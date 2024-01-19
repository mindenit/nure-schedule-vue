import { ref, computed } from 'vue'
import { useSignin } from '.'
import type { IValidationError } from '@/core/types/validation.types'
import { getFormData, handleFieldError } from '@/core/utils'
import { flatten, parse } from 'valibot'
import { authSchema } from '../schemas/auth.schema'

export const useSigninForm = () => {
  const { signin, isLoading, error } = useSignin()
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
      await signin(parsedData)
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
