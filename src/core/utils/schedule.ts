import { dayjsClient } from '@/libs/dayjs'
import { nurekit } from '@/libs/nurekit'
import type { IGroup, ISchedule, ITeacher } from 'nurekit'
import { DATE_FORMAT } from '../constants'
import type { ScheduleFnArgs, ScheduleQueryFn } from '../types/schedule'
import { toTime } from './dayjs'

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

const getPairsByTime = (time: string, pairs: ISchedule[]) => {
  return pairs.filter((pair) => {
    return toTime(pair.startTime) === time
  })
}

const stringifyGroups = (groups: IGroup[]) => {
  return groups.map((group) => group.name).join(', ')
}

const stringifyTeachers = (teachers: ITeacher[]) => {
  return teachers.map((teacher) => teacher.fullName).join(', ')
}

export { getDayPairs, getPairsByTime, getSchedule, stringifyGroups, stringifyTeachers }
