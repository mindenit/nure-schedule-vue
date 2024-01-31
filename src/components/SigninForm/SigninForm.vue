<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { TextField } from '@/components/ui/TextField'
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'

import { useSigninForm } from '@/core/composables'

const {
  emailValue,
  passwordValue,
  handleSubmit,
  validationError,
  isDisabled,
  isPending,
  formError
} = useSigninForm()

const emailError = computed(() => {
  return !validationError ? validationError['email'] : ''
})

const passwordError = computed(() => {
  return !validationError ? validationError['password'] : ''
})

const buttonText = computed(() => {
  return isPending ? 'Вхід...' : 'Увійти'
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
  @apply flex flex-col w-full gap-5;
}

.TextContainer {
  @apply flex flex-col justify-center items-center w-full gap-3;
}
</style>
