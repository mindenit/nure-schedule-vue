import { nurekit } from '@/libs/nurekit'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RecentSchedule } from '../types/schedule'
import { useAuthStore } from './auth'

export const useSchedulesStore = defineStore(
  'recent_schedules',
  () => {
    const authStore = useAuthStore()
    const activeSchedule = ref<RecentSchedule | null>()
    const recentSchedules = ref<RecentSchedule[]>([])
    const queryClient = useQueryClient()

    const { mutateAsync: addScheduleToAccount } = useMutation({
      mutationKey: ['add-schedule'],
      async mutationFn(data: RecentSchedule) {
        await nurekit.users.addSchedule(data, {
          accessToken: authStore.tokens?.accessToken as string
        })
      },
      onSuccess(_, variables) {
        console.log('success')
        addScheduleLocally(variables)
        queryClient.refetchQueries({
          queryKey: ['user', authStore.tokens?.accessToken],
          type: 'all'
        })
      },
      onError(error) {
        console.log(error)
      }
    })

    const { mutateAsync: removeScheduleFromAccount } = useMutation({
      mutationKey: ['remove-schedule'],
      async mutationFn(data: RecentSchedule) {
        await nurekit.users.removeSchedule(data, {
          accessToken: authStore.tokens?.accessToken as string
        })
      },
      onSuccess(data, variables) {
        removeScheduleLocally(variables),
          queryClient.refetchQueries({
            queryKey: ['user', authStore.tokens?.accessToken],
            type: 'all'
          })
      }
    })

    const addSchedule = async (schedule: RecentSchedule) => {
      console.log(recentSchedules.value.some((s) => s.id === schedule.id))

      if (!recentSchedules.value.some((s) => s.id === schedule.id)) {
        authStore.isAuthorized ? await addScheduleToAccount(schedule) : addScheduleLocally(schedule)
      }
    }

    const addScheduleLocally = (schedule: RecentSchedule) => {
      recentSchedules.value.unshift(schedule)
      activeSchedule.value = { ...schedule }
    }

    const removeSchedule = async (schedule: RecentSchedule) => {
      if (!authStore.isAuthorized) {
        removeScheduleLocally(schedule)
      } else {
        await removeScheduleFromAccount(schedule)
      }
    }

    const removeScheduleLocally = ({ id }: RecentSchedule) => {
      const removedIndex = recentSchedules.value.findIndex((s) => {
        return s.id === id
      })

      if (removedIndex !== -1) {
        const previosSchedule = recentSchedules.value[removedIndex - 1]
        const nextSchedule = recentSchedules.value[removedIndex + 1]

        if (activeSchedule.value && activeSchedule.value.id === id) {
          if (recentSchedules.value.length === 1) {
            activeSchedule.value = null
          }

          if (previosSchedule !== undefined) {
            activeSchedule.value = { ...previosSchedule }
          }

          if (nextSchedule !== undefined) {
            activeSchedule.value = { ...nextSchedule }
          }
        }

        recentSchedules.value.splice(removedIndex, 1)
      }
    }

    const changeActiveSchedule = (schedule: RecentSchedule) => {
      activeSchedule.value = { ...schedule }
    }

    return {
      activeSchedule,
      recentSchedules,
      addSchedule,
      changeActiveSchedule,
      removeSchedule
    }
  },
  {
    persist: true
  }
)
