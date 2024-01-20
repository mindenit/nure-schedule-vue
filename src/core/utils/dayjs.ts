import { dayjsClient } from '@/libs/dayjs'

const getWeekday = (date: string) => {
  return dayjsClient(date).weekday()
}

const getFirstDayOfMonth = (month: number, year: number) => {
  return dayjsClient(`${year}-${month}-01`)
}

const getPreviousMonth = (month: number, year: number) => {
  const firstDay = getFirstDayOfMonth(month, year)

  return dayjsClient(firstDay).subtract(1, 'month')
}

const getNextMonth = (month: number, year: number) => {
  const firstDay = getFirstDayOfMonth(month, year)

  return dayjsClient(firstDay).add(1, 'month')
}

export { getWeekday, getFirstDayOfMonth, getPreviousMonth, getNextMonth }
