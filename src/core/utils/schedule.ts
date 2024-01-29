import { nurekit } from '@/libs/nurekit'
import type { ScheduleQueryFn } from '../types/schedule'

const getSchedule = ({ type, ...rest }: ScheduleQueryFn) => {
  switch (type) {
    case 'auditoriums':
      return getAuditoriumSchedule(rest)
    case 'groups':
      return getGroupSchedule(rest)
    case 'teachers':
      return getTeacherSchedule(rest)
  }
}

const getTeacherSchedule = ({ name, startTime, endTime }: Schedule) => {
  return nurekit.teachers.getSchedule({
    startTime,
    endTime,
    teacherName: name
  })
}

const getGroupSchedule = ({ name, startTime, endTime }: Args) => {
  return nurekit.groups.getSchedule({
    startTime,
    endTime,
    groupName: name
  })
}

const getAuditoriumSchedule = ({ name, startTime, endTime }: Args) => {
  return nurekit.auditoriums.getSchedule({
    startTime,
    endTime,
    auditoriumName: name
  })
}

export { getSchedule }
