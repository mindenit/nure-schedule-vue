import type { IAuthTokens } from './auth'

export interface IUser extends IAuthTokens {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
}
