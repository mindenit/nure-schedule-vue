import type { IAuthTokens } from './auth.types'

export interface IUser extends IAuthTokens {
  id: number
  createdAt: Date
  updatedAt: Date
  email: string
}
