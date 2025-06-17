import { dayjsClient } from '@/libs/dayjs'
import { nurekit } from '@/libs/nurekit'
import type { Group, Schedule, Teacher } from 'nurekit'
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

const getTeacherSchedule = async ({ id, startedAt, endedAt }: ScheduleFnArgs) => {
  return nurekit.teachers.getSchedule({
    startedAt,
    endedAt,
    id
  })
}

const getGroupSchedule = async ({ id, startedAt, endedAt }: ScheduleFnArgs) => {
  const schedule = await nurekit.groups.getSchedule({
    startedAt,
    endedAt,
    id
  })

  return schedule
}

const getAuditoriumSchedule = async ({ id, startedAt, endedAt }: ScheduleFnArgs) => {
  return nurekit.auditoriums.getSchedule({
    startedAt,
    endedAt,
    id
  })
}

const getDayPairs = (date: string, pairs: Schedule[]) => {
  const cache = new Map<string, Schedule[]>()

  if (cache.has(date)) {
    return cache.get(date) as Schedule[]
  }

  const filtered = pairs.filter((pair) => {
    return dayjsClient.unix(pair.startedAt).format(DATE_FORMAT) === date
  })

  cache.set(date, filtered)

  return filtered
}

const getPairsByTime = (time: string, pairs: Schedule[]) => {
  const cache = new Map<string, Schedule[]>()

  if (cache.has(time)) {
    return cache.get(time) as Schedule[]
  }

  const filtered = pairs.filter((pair) => {
    return toTime(pair.startedAt) === time
  })

  cache.set(time, filtered)

  return filtered
}

const stringifyGroups = (groups: Group[]) => {
  return groups.map((group) => group.name).join(', ')
}

const stringifyTeachers = (teachers: Teacher[]) => {
  return teachers.map((teacher) => teacher.fullName).join(', ')
}

const toICS = (schedule: Schedule[]): Blob => {
  let ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nCALSCALE:GREGORIAN\n'

  for (const pair of schedule) {
    const title = `${pair.numberPair}: (${pair.type}) ${pair.subject.title}`
    const teachersString = stringifyTeachers(pair.teachers)
    const description = `Викладач(і): ${teachersString.length === 0 ? 'Немає' : teachersString}`
    const category = `${pair.type}`

    ics += 'BEGIN:VEVENT\n'
    ics += `SUMMARY:${title}\n`
    ics += `DTSTART:${toICVFormat(pair.startedAt)}\n`
    ics += `DTEND:${toICVFormat(pair.endedAt)}\n`
    ics += `LOCATION:${pair.auditorium.name}\n`
    ics += `DESCRIPTION:${description}\n`
    ics += `CATEGORIES:${category}\n`
    ics += 'END:VEVENT\n'
  }

  ics += 'END:VCALENDAR'

  return new Blob([ics], { type: 'text/calendar;charset=utf-8;' })
}

const convertSchedule = async (
  { type, id }: ExportableScheduleArgs,
  convertFn: ConvertFn
): Promise<Blob> => {
  const now = new Date()
  const year = now.getFullYear()
  const firstSeptember = new Date(year, 8, 1)
  const newSemester = now > firstSeptember

  if (id === undefined) {
    throw new Error('ID is required for exporting schedule')
  }
  const schedule = await getSchedule({
    id,
    type,
    startedAt: newSemester ? `${year}-09-01` : `${year - 1}-09-01`,
    endedAt: newSemester ? `${year + 1}-09-01` : `${year}-09-01`
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
