<script lang="ts" setup>
import { AuthLayout } from '@/layouts/AuthLayout'
import { SigninForm } from '@/components/SigninForm'
import { useHead, useSeoMeta } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

const title = 'Вхід'
const description = 'Увійдіть в акаунт щоби синхронізувати між пристроями обрані вами розклади'

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
  <AuthLayout title="Вхід">
    <SigninForm />
  </AuthLayout>
</template>
