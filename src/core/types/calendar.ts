interface CalendarDay {
  date: string
  isCurrentMonth: boolean
  isToday: boolean
}

type EventType = 'compact' | 'default'

type CalendarView = 'month' | 'week' | 'day'

export type { CalendarDay, CalendarView, EventType }
