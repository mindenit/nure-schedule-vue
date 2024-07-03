import type { ISchedule } from 'nurekit'
import type { Ref } from 'vue'

type ScheduleType = 'teachers' | 'groups' | 'auditoriums'

interface RecentSchedule {
  type: ScheduleType
  name: string
  id: number
}

interface ScheduleQueryArgs {
  schedule: Ref<RecentSchedule>
  startTime: Ref<string>
  endTime: Ref<string>
}

interface ScheduleQueryFn extends ScheduleFnArgs {
  type: ScheduleType
}

interface ScheduleFnArgs {
  name: string
  startTime: string
  endTime: string
}

interface ExportableScheduleArgs {
  name: string
  type: ScheduleType
}

type SubjectShortType = 'Лк' | 'Лб' | 'Пз' | 'Конс' | 'Зал' | 'Екз'

type ConvertFn = (schedule: ISchedule[]) => Blob

export type {
  RecentSchedule,
  ScheduleType,
  ScheduleQueryFn,
  ScheduleFnArgs,
  ScheduleQueryArgs,
  SubjectShortType,
  ExportableScheduleArgs,
  ConvertFn
}
