<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { TextField } from '@/components/ui/TextField'
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'

import { useSigninForm } from '@/core/composables/'

const {
  emailValue,
  passwordValue,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  validationError,
  isDisabled,
  isLoading,
  formError
} = useSigninForm()
</script>
<template>
  <form class="Form" @submit.prevent="handleSubmit">
    <TextField
      id="email"
      type="email"
      name="email"
      inputmode="email"
      placeholder="Електронна пошта"
      :value="emailValue"
      @input="handleEmailChange"
      :error="`${validationError !== null ? validationError['email'] : ''}`"
      autofocus
    />
    <TextField
      id="password"
      type="password"
      name="password"
      inputmode="password"
      placeholder="Пароль"
      :value="passwordValue"
      @input="handlePasswordChange"
      :error="`${validationError !== null ? validationError['password'] : ''}`"
    />
    <p class="ErrorText" v-if="validationError !== null">{{ formError }}</p>
    <Button @click="handleSubmit" :disabled="isDisabled || isLoading">
      {{ isLoading ? 'Вхід...' : 'Увійти' }}
    </Button>
    <div class="TextContainer">
      <div class="flex gap-1">
        <Title variant="medium">Немає аккаунту? </Title>
        <RouterLink to="/signup"><Title variant="medium">Зареєструватися</Title></RouterLink>
      </div>
      <RouterLink to="/">Продовжити як гість</RouterLink>
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
