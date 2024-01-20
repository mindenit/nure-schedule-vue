import { dayjsClient } from '@/libs/dayjs'
import { computed } from 'vue'
import { DATE_FORMAT, MONTH_FORMAT, YEAR_FORMAT } from '../constants/calendar'
import type { CalendarDay } from '../types/calendar.types'
import { getNextMonth, getPreviousMonth, getWeekday } from '../utils/dayjs'
import { capitalize } from '../utils/string'

export const useCalendar = () => {
  const selectedDate = dayjsClient()

  const today = computed(() => {
    return dayjsClient().format(DATE_FORMAT)
  })

  const month = computed(() => {
    return +selectedDate.format(MONTH_FORMAT)
  })

  const year = computed(() => {
    return +selectedDate.format(YEAR_FORMAT)
  })

  const daysInMonth = computed(() => {
    return dayjsClient(selectedDate).daysInMonth()
  })

  const currentDays = computed(() => {
    return [...Array(daysInMonth.value)].map((_, index): CalendarDay => {
      const currentDay = `${year.value}-${month.value}-${index + 1}`
      const date = dayjsClient(currentDay).format(DATE_FORMAT)

      return {
        date,
        isCurrentMonth: true,
        isToday: date === today.value
      }
    })
  })

  const previousMonthDays = computed(() => {
    const firstDayOfMonthWeekday = getWeekday(currentDays.value[0].date)

    const previousMonth = getPreviousMonth(month.value, year.value)

    const visibleNumberOfDays = firstDayOfMonthWeekday ? firstDayOfMonthWeekday - 1 : 6

    const previousMonthLastMonday = dayjsClient(currentDays.value[0].date)
      .subtract(visibleNumberOfDays, 'day')
      .date()

    return [...Array(visibleNumberOfDays)].map((_, index): CalendarDay => {
      const day = `${previousMonth.year()}-${previousMonth.month() + 1}-${
        previousMonthLastMonday + index
      }`
      const date = dayjsClient(day).format(DATE_FORMAT)

      return {
        date,
        isCurrentMonth: false,
        isToday: date === today.value
      }
    })
  })

  const nextMonthDays = computed(() => {
    const lastDayOfMonthWeekday = getWeekday(
      `${year.value}-${month.value}-${currentDays.value.length}`
    )

    const nextMonth = getNextMonth(month.value, year.value)

    const visibleNumberOfDays = lastDayOfMonthWeekday
      ? 7 - lastDayOfMonthWeekday
      : lastDayOfMonthWeekday

    return [...Array(visibleNumberOfDays)].map((_, index): CalendarDay => {
      const day = `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
      const date = dayjsClient(day).format(DATE_FORMAT)

      return {
        date,
        isCurrentMonth: false,
        isToday: date === today.value
      }
    })
  })

  const days = computed(() => {
    return [...previousMonthDays.value, ...currentDays.value, ...nextMonthDays.value]
  })

  return { days }
}
