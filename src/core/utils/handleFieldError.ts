import type { IValidationError } from '@/core/types/validation.types'
import type { FlatErrors } from 'valibot'

interface IArgs {
  error: FlatErrors
  names: string[]
  callback?: (err: IValidationError) => void
}

export function handleFieldError({ error, names, callback }: IArgs) {
  const errorObj = {}

  for (const name of names) {
    if (name in error.nested) {
      Object.assign(errorObj, {
        // @ts-ignore
        [name]: error.nested[name].join(' ')
      })

      if (callback) callback(errorObj)
      else console.warn(errorObj)
    }
  }
}
