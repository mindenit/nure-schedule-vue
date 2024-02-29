import { email, object, string } from 'valibot'

export const authSchema = object({
  email: string([email('Невірна електронна пошта')]),
  password: string()
})
