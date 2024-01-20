interface CalendarDay {
  date: string
  isCurrentMonth: boolean
  isToday: boolean
}

type CalendarView = 'month' | 'week' | 'day'

export type { CalendarDay, CalendarView }
