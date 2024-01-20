<script lang="ts" setup>
import { Navbar } from '@/components/Navbar'
</script>
<template>
  <main class="flex flex-col h-dvh box-border">
    <Navbar />
    <slot></slot>
  </main>
</template>
<style lang="css" scoped></style>
