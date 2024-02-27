<script lang="ts" setup>
import { AuthLayout } from '@/layouts/AuthLayout'
import { SigninForm } from '@/components/SigninForm'
import { useHead } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

useHead({
  title: 'Вхід',
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
})
</script>
<template>
  <AuthLayout title="Вхід">
    <SigninForm />
  </AuthLayout>
</template>
