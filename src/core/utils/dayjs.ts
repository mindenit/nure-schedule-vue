import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import {
  DAY_WITH_MONTH_FORMAT,
  LONG_DAY_FORMAT,
  LONG_MONTH_FORMAT,
  TIME_FORMAT
} from '../constants'
import { capitalize } from './string'

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

const toDayWithMonth = (date: string | number) => {
  if (typeof date === 'string') {
    return dayjsClient(date).locale('uk').format(DAY_WITH_MONTH_FORMAT)
  }

  return dayjsClient.unix(date).locale('uk').format(DAY_WITH_MONTH_FORMAT)
}

const toMonthName = (date: Dayjs) => {
  return capitalize(dayjsClient(date).locale('uk').format(LONG_MONTH_FORMAT))
}

const toTime = (date: string | number) => {
  if (typeof date === 'string') {
    return dayjsClient(date).format(TIME_FORMAT)
  }

  return dayjsClient.unix(date).format(TIME_FORMAT)
}

const toDay = (date: string | number) => {
  if (typeof date === 'string') {
    return capitalize(dayjsClient(date).locale('uk').format(LONG_DAY_FORMAT))
  }

  return capitalize(dayjsClient.unix(date).locale('uk').format(LONG_DAY_FORMAT))
}

export {
  getFirstDayOfMonth,
  getNextMonth,
  getPreviousMonth,
  getWeekday,
  toDay,
  toDayWithMonth,
  toMonthName,
  toTime
}
