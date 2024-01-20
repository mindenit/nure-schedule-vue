<script lang="ts" setup>
import { CALENDAR_HEADERS } from '@/core/constants/calendar'
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
  @apply flex flex-row w-full h-fit;
}

.MonthHeader {
  @apply flex items-center justify-start w-full h-fit bg-transparent text-sm font-medium font-roboto leading-5 tracking-tight p-2 ml-7 box-border;

  @media (max-width: theme('screens.sm')) {
    @apply ml-2;
  }
}
</style>
