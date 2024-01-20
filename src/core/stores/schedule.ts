import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { RecentSchedule } from '../types/schedule.types'

export const useScheduleStore = defineStore(
  'schedule',
  () => {
    const router = useRouter()
    const route = useRoute()

    const activeSchedule = ref<RecentSchedule | null>()
    const recentSchedules = ref<RecentSchedule[]>([])

    const addSchedule = (schedule: RecentSchedule) => {
      if (!recentSchedules.value.some((s) => s.name === schedule.name)) {
        recentSchedules.value.unshift(schedule)
        activeSchedule.value = { ...schedule }
      }
    }

    const removeSchedule = ({ name, type }: RecentSchedule) => {
      const removedIndex = recentSchedules.value.findIndex((s) => {
        return s.name === name && s.type === type
      })

      if (removedIndex !== -1) {
        const previosSchedule = recentSchedules.value[removedIndex - 1]
        const nextSchedule = recentSchedules.value[removedIndex + 1]

        if (activeSchedule.value && activeSchedule.value.name === name) {
          if (recentSchedules.value.length === 1) {
            activeSchedule.value = null
            router.replace({ name: 'home', query: {} })
          }

          if (previosSchedule !== undefined) {
            activeSchedule.value = { ...previosSchedule }
            router.replace({
              name: 'home',
              query: {
                ...route.query,
                type: activeSchedule.value.type,
                name: activeSchedule.value.name
              }
            })
          }

          if (nextSchedule !== undefined) {
            activeSchedule.value = { ...nextSchedule }
            router.replace({
              name: 'home',
              query: {
                ...route.query,
                type: activeSchedule.value.type,
                name: activeSchedule.value.name
              }
            })
          }
        }

        recentSchedules.value.splice(removedIndex, 1)
      }
    }

    const changeActiveSchedule = (schedule: RecentSchedule) => {
      activeSchedule.value = { ...schedule }
      router.replace({
        name: 'home',
        query: {
          ...route.query,
          type: activeSchedule.value.type,
          name: activeSchedule.value.name
        }
      })
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
