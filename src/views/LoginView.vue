<script lang="ts" setup>
import { SigninForm } from '@/components/SigninForm'
import { TITLE_TEMPLATE } from '@/core/constants'
import { AuthLayout } from '@/layouts/AuthLayout'
import { useHead, useSeoMeta } from '@unhead/vue'

const title = 'Вхід'
const description = 'Увійдіть в акаунт щоби синхронізувати між пристроями обрані вами розклади'

useHead({
  title,
  titleTemplate: TITLE_TEMPLATE,
  script: [{ key: '1', src: 'https://challenges.cloudflare.com/turnstile/v0/api.js' }]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>
<template>
  <AuthLayout title="Вхід">
    <SigninForm />
  </AuthLayout>
</template>
