<script lang="ts" setup>
import { AuthLayout } from '@/layouts/AuthLayout'
import { SignupForm } from '@/components/SignupForm'
import { useHead, useSeoMeta } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

const title = 'Реєстрація'
const description = 'Створіть акаунт щоби синхронізувати між пристроями обрані вами розклади.'

useHead({
  title,
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
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
