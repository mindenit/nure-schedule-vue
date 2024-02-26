import { authSchema } from '@/core/validations/auth'
import type { Output } from 'valibot'

export type TAuthInput = Output<typeof authSchema>

export interface IAuthTokens {
  accessToken: string | null
  refreshToken: string | null
}
