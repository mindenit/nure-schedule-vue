import type { Ref } from 'vue'

type ScheduleType = 'teachers' | 'groups' | 'auditoriums'

interface RecentSchedule {
  type: ScheduleType
  name: string
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

export type { RecentSchedule, ScheduleType, ScheduleQueryFn, ScheduleFnArgs, ScheduleQueryArgs }
