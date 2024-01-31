<script lang="ts" setup>
import { CALENDAR_HEADERS } from '@/core/constants'
</script>
<template>
  <section class="MonthHeadersRoot">
    <span v-for="(header, index) in CALENDAR_HEADERS" :key="index" class="MonthHeader">
      {{ header }}
    </span>
  </section>
</template>
<style lang="scss" scoped>
.MonthHeadersRoot {
  @apply flex h-fit w-full flex-row;
}

.MonthHeader {
  @apply ml-7 box-border flex h-fit w-full touch-none select-none items-center justify-start bg-transparent p-2 font-roboto text-sm font-medium leading-5 tracking-tight;

  @media (max-width: theme('screens.sm')) {
    @apply ml-2;
  }
}
</style>
