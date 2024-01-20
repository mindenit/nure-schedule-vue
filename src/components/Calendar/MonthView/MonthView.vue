<script lang="ts" setup>
import type { CalendarDay } from '@/core/types/calendar.types'
import MonthDay from './MonthDay.vue'
import MonthHeaders from './MonthHeaders.vue'

defineProps<{ days: CalendarDay[] }>()
</script>
<template>
  <section class="MonthView">
    <MonthHeaders />
    <ul class="MonthDays">
      <MonthDay v-for="(day, index) in days" :key="index" :day="day" />
    </ul>
  </section>
</template>
<style lang="scss" scoped>
.MonthView {
  @apply flex flex-col items-start justify-start w-full h-full gap-4 box-border mt-6;
}

.MonthDays {
  @apply grid flex-row flex-wrap grid-cols-7 list-none w-full h-full;
}
</style>
