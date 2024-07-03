import { dayjsClient } from '@/libs/dayjs'
import { nurekit } from '@/libs/nurekit'
import type { IGroup, ISchedule, ITeacher } from 'nurekit'
import { DATE_FORMAT } from '../constants'
import type {
  ConvertFn,
  ExportableScheduleArgs,
  ScheduleFnArgs,
  ScheduleQueryFn
} from '../types/schedule'
import { toICVFormat, toTime } from './dayjs'

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
  const cache = new Map<string, ISchedule[]>()

  if (cache.has(date)) {
    return cache.get(date) as ISchedule[]
  }

  const filtered = pairs.filter((pair) => {
    return dayjsClient.unix(pair.startTime).format(DATE_FORMAT) === date
  })

  cache.set(date, filtered)

  return filtered
}

const getPairsByTime = (time: string, pairs: ISchedule[]) => {
  const cache = new Map<string, ISchedule[]>()

  if (cache.has(time)) {
    return cache.get(time) as ISchedule[]
  }

  const filtered = pairs.filter((pair) => {
    return toTime(pair.startTime) === time
  })

  cache.set(time, filtered)

  return filtered
}

const stringifyGroups = (groups: IGroup[]) => {
  return groups.map((group) => group.name).join(', ')
}

const stringifyTeachers = (teachers: ITeacher[]) => {
  return teachers.map((teacher) => teacher.fullName).join(', ')
}

const toICS = (schedule: ISchedule[]): Blob => {
  let ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\n'

  for (const pair of schedule) {
    const title = `${pair.numberPair}: (${pair.type}) ${pair.subject.title}`
    const teachersString = stringifyTeachers(pair.teachers)
    const description = `Викладач(і): ${teachersString.length === 0 ? 'Немає' : teachersString}`

    ics += 'BEGIN:VEVENT\n'
    ics += `SUMMARY:${title}\n`
    ics += `DTSTART:${toICVFormat(pair.startTime)}\n`
    ics += `DTEND:${toICVFormat(pair.endTime)}\n`
    ics += `LOCATION:${pair.auditory}\n`
    ics += `DESCRIPTION:${description}\n`
    ics += 'END:VEVENT\n'
  }

  ics += 'END:VCALENDAR'

  return new Blob([ics], { type: 'text/calendar;charset=utf-8;' })
}

const convertSchedule = async (
  { type, name }: ExportableScheduleArgs,
  convertFn: ConvertFn
): Promise<Blob> => {
  const now = new Date()
  const year = now.getFullYear()
  const firstSeptember = new Date(year, 8, 1)
  const newSemester = now > firstSeptember

  const schedule = await getSchedule({
    type,
    name,
    startTime: newSemester ? `${year}-09-01` : `${year - 1}-09-01`,
    endTime: newSemester ? `${year + 1}-09-01` : `${year}-09-01`
  })

  return convertFn(schedule)
}

export {
  getDayPairs,
  getPairsByTime,
  getSchedule,
  stringifyGroups,
  stringifyTeachers,
  toICS,
  convertSchedule
}
