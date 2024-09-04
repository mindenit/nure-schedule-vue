import { AUDITORIUMS_QUERY_KEY, GROUPS_QUERY_KEY, TEACHERS_QUERY_KEY } from '@/core/constants'
import { nurekit } from '@/libs/nurekit'
import { useQueries } from '@tanstack/vue-query'

export const useDataQueries = () => {
  return useQueries({
    queries: [
      { queryKey: [GROUPS_QUERY_KEY], queryFn: async () => nurekit.groups.findMany() },
      { queryKey: [TEACHERS_QUERY_KEY], queryFn: async () => nurekit.teachers.findMany() },
      { queryKey: [AUDITORIUMS_QUERY_KEY], queryFn: async () => nurekit.auditoriums.findMany() }
    ]
  })
}
