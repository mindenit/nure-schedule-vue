<script lang="ts" setup>
import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/TextField'
import { Title } from '@/components/ui/Title'
import { useTheme } from '@/core/composables'
import { useAuthStore } from '@/core/stores/auth'
import type { TAuthInput } from '@/core/types'
import { authSchema } from '@/core/validations'
import { useMutation } from '@tanstack/vue-query'
import { toTypedSchema } from '@vee-validate/valibot'
import { type Output } from 'valibot'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { IS_PRODUCTION } from '@/core/constants'
import { transformAuthError } from '@/core/utils'

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
  mutationKey: ['signin'],
  async mutationFn(data: TAuthInput) {
    try {
      await authStore.signin(data)
    } catch (error) {
      // @ts-ignore
      throw new Error(error)
    }
  },
  onSuccess() {
    router.push({ name: 'home' })
  },
  onError(error, variables, context) {
    console.log(error)
  }
})

const [email] = defineField('email')

const [password] = defineField('password')

const submit = handleSubmit((data) => {
  mutateAsync(data)
})

const buttonText = computed(() => {
  return status.value === 'pending' ? 'Вхід...' : 'Увійти'
})

const isEmpty = computed(() => Object.values(values).some((value) => value.trim() === ''))

const isDisabled = computed(() => {
  return status.value === 'pending' || isEmpty.value || isSubmitting.value
})

const transformedError = computed(() => {
  // @ts-ignore
  return transformAuthError(error?.value?.message)
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
    <div
      v-if="IS_PRODUCTION"
      class="cf-turnstile"
      data-sitekey="0x4AAAAAAAS7MPqHI2QUmMK_"
      :data-theme="isDark ? 'dark' : 'light'"
    ></div>
    <p class="ErrorText" v-if="isError">{{ transformedError }}</p>
    <Button type="submit" :disabled="isDisabled">
      {{ buttonText }}
    </Button>
    <div class="TextContainer">
      <div class="flex gap-1">
        <Title variant="medium">Немає аккаунту?</Title>
        <RouterLink :to="{ name: 'signup' }">
          <Title variant="medium">Зареєструватися</Title>
        </RouterLink>
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
