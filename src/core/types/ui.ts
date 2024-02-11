import type { ScheduleType } from './schedule'

interface ViewProps<T> {
  // TODO: Fix issue with types
  data: T[]
  select: 'name' | 'shortName'
  type: ScheduleType
}

export type { ViewProps }
