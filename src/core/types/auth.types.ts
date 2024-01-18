import { authSchema } from '@/core/schemas/auth.schema'
import { Output } from 'valibot'

export type TAuthInput = Output<typeof authSchema>

export interface IAuthTokens {
  access_token: string | null
  refresh_token: string | null
}
