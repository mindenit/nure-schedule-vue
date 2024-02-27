<script lang="ts" setup>
import { AuthLayout } from '@/layouts/AuthLayout'
import { SignupForm } from '@/components/SignupForm'
import { useHead } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

useHead({
  title: 'Реєстрація',
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
})
</script>
<template>
  <AuthLayout title="Реєстрація">
    <SignupForm />
  </AuthLayout>
</template>
