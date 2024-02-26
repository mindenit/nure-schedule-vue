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
import { RouterLink } from 'vue-router'

const authStore = useAuthStore()

const { defineField, errors, handleSubmit, isSubmitting, values } = useForm<
  Output<typeof authSchema>
>({
  initialValues: {
    email: '',
    password: ''
  }
})

const { mutateAsync, status, error, isError } = useMutation({
  mutationKey: ['signup'],
  async mutationFn(data: TAuthInput) {
    await authStore.signup(data)
  }
})

const [email] = defineField('email')

const [password] = defineField('password')

const submit = handleSubmit((values) => {
  console.log(values)

  mutateAsync(values)
})

const buttonText = computed(() => {
  return status.value === 'pending' ? 'Реєстратиція...' : 'Зареєструватися'
})

const isEmpty = computed(() => Object.values(values).some((value) => value.trim() === ''))

const isDisabled = computed(() => {
  return status.value === 'pending' || isEmpty.value || isSubmitting.value
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
    <p class="ErrorText" v-if="isError">{{ error?.message }}</p>
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
