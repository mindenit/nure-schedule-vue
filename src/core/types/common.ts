type PipeFn<T> = (value: T) => T
type PipeArrFn<T> = (value: T[]) => T[]

export type { PipeFn, PipeArrFn }
