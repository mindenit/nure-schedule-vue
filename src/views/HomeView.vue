<script setup lang="ts">
import { MainLayout } from '@/layouts/MainLayout'

import { SignupForm } from '@/components/SignupForm'
import { SigninForm } from '@/components/SigninForm'
</script>

<template>
  <MainLayout>
    <main>
      <SignupForm></SignupForm>
      <SigninForm></SigninForm>
    </main>
  </MainLayout>
</template>
