type ScheduleType = 'teachers' | 'groups' | 'auditoriums'

interface RecentSchedule {
  type: ScheduleType
  name: string
}

interface ScheduleQueryFn extends ScheduleFnArgs {
  type: ScheduleType
}

interface ScheduleFnArgs {
  name: string
  startTime: string
  endTime: string
}

export type { RecentSchedule, ScheduleType, ScheduleQueryFn }
