import { useQuery } from '@tanstack/vue-query'
import { SCHEDULE_QUERY_KEY } from '../constants'
import { getSchedule } from '../utils/schedule'
import type { ScheduleQueryFn } from '../types'

export const useScheduleQuery = (args: ScheduleQueryFn) => {
  return useQuery({
    queryKey: [SCHEDULE_QUERY_KEY, args],
    async queryFn() {
      return getSchedule(args)
    },
    staleTime: 24 * 60 * 60 * 1000,
    gcTime: 5 * 60 * 1000
  })
}
