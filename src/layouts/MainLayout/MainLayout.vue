<script lang="ts" setup>
import { MobileHeader } from '@/components/MobileHeader'
import { Navbar } from '@/components/Navbar'
import { Icon } from '@iconify/vue/dist/iconify.js'
defineProps<{ title: string }>()
</script>
<template>
  <main class="box-border flex h-dvh flex-col">
    <MobileHeader title="Розклад" />
    <Navbar :title="title" />
    <div
      class="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[#fd8f00] to-[#ff9f10] px-4 py-3 text-black shadow-sm"
    >
      <div class="flex items-center gap-2">
        <Icon icon="ic:sharp-info" class="size-5" />
        <span class="font-medium">
          Команда розробників шукає Frontend та Backend розробників.
        </span>
      </div>
      <a
        href="https://mindenit.org/hiring"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black transition-all duration-200 hover:-mx-2 hover:-my-1 hover:rounded hover:bg-black/10 hover:px-2 hover:py-1 focus:outline-none"
      >
        Доєжнатися
      </a>
    </div>
    <slot></slot>
  </main>
</template>
