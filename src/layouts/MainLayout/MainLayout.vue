<script lang="ts" setup>
import { MobileHeader } from '@/components/MobileHeader'
import { Navbar } from '@/components/Navbar'

defineProps<{ title: string }>()
</script>
<template>
  <main class="box-border flex h-dvh flex-col">
    <MobileHeader title="Розклад" />
    <Navbar :title="title" />
    <div class="flex w-full items-center justify-center bg-[#fdc700] px-2 text-black">
      На даний момент розклад не доступний. Будь ласка, спробуйте пізніше.
    </div>
    <slot></slot>
  </main>
</template>
