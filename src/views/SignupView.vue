<script lang="ts" setup>
import { SignupForm } from '@/components/SignupForm'
import { TITLE_TEMPLATE } from '@/core/constants'
import { AuthLayout } from '@/layouts/AuthLayout'
import { useHead, useSeoMeta } from '@unhead/vue'

const title = 'Реєстрація'
const description = 'Створіть акаунт щоби синхронізувати між пристроями обрані вами розклади.'

useHead({
  title,
  titleTemplate: TITLE_TEMPLATE,
  script: [{ key: '2', src: 'https://challenges.cloudflare.com/turnstile/v0/api.js' }]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>
<template>
  <AuthLayout title="Реєстрація">
    <SignupForm />
  </AuthLayout>
</template>
