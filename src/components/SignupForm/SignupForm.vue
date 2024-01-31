<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { TextField } from '@/components/ui/TextField'
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'

import { useSignupForm } from '@/core/composables'

const {
  emailValue,
  passwordValue,
  handleSubmit,
  validationError,
  isDisabled,
  isPending,
  formError
} = useSignupForm()

const emailError = computed(() => {
  return !validationError ? validationError['email'] : ''
})

const passwordError = computed(() => {
  return !validationError ? validationError['password'] : ''
})

const buttonText = computed(() => {
  return isPending ? 'Реєстратиція...' : 'Зареєструватися'
})
</script>
<template>
  <form class="Form" @submit.prevent="handleSubmit">
    <TextField
      id="email"
      type="email"
      name="email"
      inputmode="email"
      placeholder="Електронна пошта"
      v-model="emailValue"
      :error="emailError"
      autofocus
    />
    <TextField
      id="password"
      type="password"
      name="password"
      inputmode="password"
      placeholder="Пароль"
      v-model="passwordValue"
      :error="passwordError"
    />
    <p class="ErrorText" v-if="validationError !== null">{{ formError }}</p>
    <Button type="submit" :disabled="isDisabled || isPending">
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
