import type { IValidationError } from '@/core/types/validation'
import type { FlatErrors } from 'valibot'

interface IArgs {
  error: FlatErrors
  names: string[]
  callback?: (err: IValidationError) => void
}

const getFormData = (e: any) => {
  const formData = new FormData(e.target)

  return Object.fromEntries(formData.entries())
}

const handleFieldError = ({ error, names, callback }: IArgs) => {
  const errorObj = {}

  for (const name of names) {
    if (name in error.nested) {
      Object.assign(errorObj, {
        // @ts-ignore
        [name]: error.nested[name].join(' ')
      })

      callback ? callback(errorObj) : console.warn(errorObj)
    }
  }
}

export { getFormData, handleFieldError }
