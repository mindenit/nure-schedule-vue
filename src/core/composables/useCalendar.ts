import { DATE_FORMAT } from '@/core/constants/calendar'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import { computed, ref } from 'vue'
import { useMonth } from './useMonth'
import { useWeek } from './useWeek'

export const useCalendar = () => {
  const selectedDate = ref<Dayjs>(dayjsClient())
  const today = computed(() => {
    return dayjsClient().format(DATE_FORMAT)
  })

  const { days: monthDays, firstDay, lastDay } = useMonth({ today, selectedDate })
  const { days: weekDays } = useWeek({ today, selectedDate })

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
    lastDay
  }
}
