<script lang="ts" setup>
import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/TextField'
import { Title } from '@/components/ui/Title'
import { useAuthStore } from '@/core/stores/auth'
import type { TAuthInput } from '@/core/types'
import { authSchema } from '@/core/validations'
import { useMutation } from '@tanstack/vue-query'
import type { Output } from 'valibot'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { PasswordChecker } from '../PasswordChecker'
import { toTypedSchema } from '@vee-validate/valibot'
import { usePasswordCheckers, useTheme } from '@/core/composables'
import { IS_PRODUCTION } from '@/core/constants'

const router = useRouter()
const authStore = useAuthStore()
const { isDark } = useTheme()

const { defineField, errors, handleSubmit, isSubmitting, values } = useForm<
  Output<typeof authSchema>
>({
  initialValues: {
    email: '',
    password: ''
  },
  // @ts-ignore
  validationSchema: toTypedSchema(authSchema)
})

const { mutateAsync, status, error, isError } = useMutation({
  mutationKey: ['signup'],
  async mutationFn(data: TAuthInput) {
    await authStore.signup(data)
  },
  onSuccess() {
    router.push({ name: 'login' })
  }
})

const [email] = defineField('email')

const [password] = defineField('password')

const submit = handleSubmit((data, ctx) => {
  ctx.evt?.preventDefault()

  mutateAsync(data)
})

const buttonText = computed(() => {
  return status.value === 'pending' ? 'Реєстратиція...' : 'Зареєструватися'
})

const isEmpty = computed(() => Object.values(values).some((value) => value.trim() === ''))

const { isValid } = usePasswordCheckers(password)

const isDisabled = computed(() => {
  return status.value === 'pending' || isEmpty.value || isSubmitting.value || !isValid.value
})
</script>
<template>
  <form class="Form" @submit="submit">
    <TextField
      id="email"
      type="email"
      name="email"
      inputmode="email"
      placeholder="Електронна пошта"
      v-model="email"
      :error="errors.email"
      :disabled="isSubmitting"
      autofocus
    />
    <TextField
      id="password"
      type="password"
      name="password"
      inputmode="password"
      placeholder="Пароль"
      v-model="password"
      :error="errors.password"
      :disabled="isSubmitting"
    />
    <PasswordChecker :password="password" />
    <div
      v-if="IS_PRODUCTION"
      class="cf-turnstile"
      data-sitekey="0x4AAAAAAAS7MPqHI2QUmMK_"
      :data-theme="isDark ? 'dark' : 'light'"
    ></div>
    <p class="ErrorText" v-if="isError">{{ error?.response.data.title }}</p>
    <Button type="submit" :disabled="isDisabled">
      {{ buttonText }}
    </Button>
    <div class="TextContainer">
      <div class="flex items-center justify-center gap-1">
        <Title variant="medium">Вже є аккаунт?</Title>
        <RouterLink :to="{ name: 'login' }"><Title variant="medium">Увійти</Title></RouterLink>
      </div>
      <RouterLink :to="{ name: 'home' }">Продовжити як гість</RouterLink>
    </div>
  </form>
</template>
<style lang="scss" scoped>
.Form {
  @apply flex w-full flex-col gap-5;
}

.TextContainer {
  @apply flex w-full flex-col items-center justify-center gap-3;
}
</style>
