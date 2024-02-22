<script lang="ts" setup>
import { MobileHeader } from '@/components/MobileHeader'
import { Navbar } from '@/components/Navbar'
</script>
<template>
  <main class="box-border flex h-dvh flex-col">
    <MobileHeader title="Розклад" />
    <Navbar />
    <slot></slot>
  </main>
</template>
<style lang="css" scoped></style>
