import type { PipeArrFn, PipeFn } from '../types/common'

export function pipe<T>(value: T[], fns: PipeArrFn<T>): T[]

export function pipe<T>(value: T, ...fns: PipeFn<T>[]): T {
  let result = value

  for (const fn of fns) {
    result = fn(result)
  }

  return result
}

export function flow<T>(...fns: PipeArrFn<T>[]): PipeArrFn<T>

export function flow<T>(...fns: PipeFn<T>[]) {
  return (value: T) => {
    // TODO: resolve type issue
    // @ts-ignore
    return pipe(value, ...fns)
  }
}
