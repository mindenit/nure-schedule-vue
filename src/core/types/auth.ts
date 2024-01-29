import { authSchema } from '@/core/validations/auth'
import type { Output } from 'valibot'

export type TAuthInput = Output<typeof authSchema>

export interface IAuthTokens {
  access_token: string | null
  refresh_token: string | null
}
