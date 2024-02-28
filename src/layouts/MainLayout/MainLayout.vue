<script lang="ts" setup>
import { MobileHeader } from '@/components/MobileHeader'
import { Navbar } from '@/components/Navbar'

defineProps<{ title: string }>()
</script>
<template>
  <main class="box-border flex h-dvh flex-col">
    <MobileHeader title="Розклад" />
    <Navbar :title="title" />
    <slot></slot>
  </main>
</template>
