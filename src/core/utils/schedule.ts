import { nurekit } from '@/libs/nurekit'
import type { ScheduleFnArgs, ScheduleQueryFn } from '../types/schedule'
import type { ISchedule } from 'nurekit'
import { dayjsClient } from '@/libs/dayjs'
import { DATE_FORMAT } from '../constants'

const getSchedule = async ({ type, ...rest }: ScheduleQueryFn) => {
  switch (type) {
    case 'auditoriums':
      return getAuditoriumSchedule(rest)
    case 'groups':
      return getGroupSchedule(rest)
    case 'teachers':
      return getTeacherSchedule(rest)
  }
}

const getTeacherSchedule = async ({ name, startTime, endTime }: ScheduleFnArgs) => {
  return nurekit.teachers.getSchedule({
    startTime,
    endTime,
    teacherName: name
  })
}

const getGroupSchedule = async ({ name, startTime, endTime }: ScheduleFnArgs) => {
  const schedule = await nurekit.groups.getSchedule({
    startTime,
    endTime,
    groupName: name
  })

  return schedule
}

const getAuditoriumSchedule = async ({ name, startTime, endTime }: ScheduleFnArgs) => {
  return nurekit.auditoriums.getSchedule({
    startTime,
    endTime,
    auditoriumName: name
  })
}

const getDayPairs = (date: string, pairs: ISchedule[]) => {
  return pairs.filter((pair) => {
    return dayjsClient.unix(pair.startTime).format(DATE_FORMAT) === date
  })
}

export { getSchedule, getDayPairs }
