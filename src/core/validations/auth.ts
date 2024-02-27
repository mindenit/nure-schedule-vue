import { email, minLength, object, string } from 'valibot'

export const authSchema = object({
  email: string([email('Невірна електронна пошта')]),
  password: string([minLength(6, 'Пароль має містити що найменше 6 символів')])
})
