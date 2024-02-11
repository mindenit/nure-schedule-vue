import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import { computed, type ComputedRef, type Ref } from 'vue'
import { DATE_FORMAT } from '../constants/calendar'
import type { CalendarDay } from '../types/calendar'

interface Args {
  selectedDate: Ref<Dayjs>
  today: ComputedRef<string>
}

export const useWeek = ({ selectedDate, today }: Args) => {
  const firstDayOfWeek = computed(() => {
    return dayjsClient(selectedDate.value).locale('uk').weekday(0)
  })

  const days = computed(() => {
    return [...Array(7)].map((_, index): CalendarDay => {
      const date = firstDayOfWeek.value.locale('uk').add(index, 'day')
      const isCurrentMonth = date.month() === dayjsClient().month()

      return {
        date: date.format(DATE_FORMAT),
        isCurrentMonth,
        isToday: date.format(DATE_FORMAT) === today.value
      }
    })
  })

  return { days }
}
