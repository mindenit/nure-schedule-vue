import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RecentSchedule } from '../types/schedule'

export const useSchedulesStore = defineStore(
  'recent_schedules',
  () => {
    const activeSchedule = ref<RecentSchedule | null>()
    const recentSchedules = ref<RecentSchedule[]>([])

    const addSchedule = async (schedule: RecentSchedule) => {
      if (!recentSchedules.value.some((s) => s.id === schedule.id)) {
        addScheduleLocally(schedule)
      }
    }

    const addScheduleLocally = (schedule: RecentSchedule) => {
      recentSchedules.value.unshift(schedule)
      activeSchedule.value = { ...schedule }
    }

    const removeSchedule = async (schedule: RecentSchedule) => {
      removeScheduleLocally(schedule)
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
