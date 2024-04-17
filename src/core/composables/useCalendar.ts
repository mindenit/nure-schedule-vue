import { DATE_FORMAT } from '@/core/constants/calendar'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import { computed, ref } from 'vue'
import { useMonth } from './useMonth'
import { useWeek } from './useWeek'
import { createSharedComposable } from '@vueuse/core'

export const useCalendar = createSharedComposable(() => {
  const selectedDate = ref<Dayjs>(dayjsClient())
  const today = computed(() => {
    return dayjsClient().format(DATE_FORMAT)
  })

  const {
    days: monthDays,
    firstDay,
    lastDay,
    currentMonth,
    nextMonth,
    previousMonth
  } = useMonth({ today, selectedDate })
  const { days: weekDays, nextWeek, previousWeek } = useWeek({ today, selectedDate })

  const selectDate = (date: Dayjs) => {
    selectedDate.value = date
  }

  return {
    selectedDate,
    today,
    monthDays,
    weekDays,
    selectDate,
    firstDay,
    lastDay,
    currentMonth,
    nextMonth,
    previousMonth,
    nextWeek,
    previousWeek
  }
})
