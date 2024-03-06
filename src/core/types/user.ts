import type { RecentSchedule } from '.'

export interface IUser {
  id: number
  createdAt: Date
  updatedAt: Date
  schedules: RecentSchedule
}
