import { AUDITORIUMS_QUERY_KEY, GROUPS_QUERY_KEY, TEACHERS_QUERY_KEY } from '@/core/constants'
import { nurekit } from '@/libs/nurekit'
import { useQueries } from '@tanstack/vue-query'

export const useDataQueries = () => {
  const options = {
    staleTime: Infinity,
    gcTime: 5 * 60 * 1000
  }

  return useQueries({
    queries: [
      { queryKey: [GROUPS_QUERY_KEY], queryFn: async () => nurekit.groups.findMany(), ...options },
      {
        queryKey: [TEACHERS_QUERY_KEY],
        queryFn: async () => nurekit.teachers.findMany(),
        ...options
      },
      {
        queryKey: [AUDITORIUMS_QUERY_KEY],
        queryFn: async () => nurekit.auditoriums.findMany(),
        ...options
      }
    ]
  })
}
