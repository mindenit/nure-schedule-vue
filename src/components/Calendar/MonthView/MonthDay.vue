<script lang="ts" setup>
import type { CalendarDay } from '@/core/types/calendar.types'
import dayjs from 'dayjs'
import { computed } from 'vue'

interface Props {
  day: CalendarDay
}

const props = defineProps<Props>()

const label = computed(() => {
  // @ts-ignore
  return dayjs(props.day.date).format('D')
})
</script>
<template>
  <li :class="[{ Today: day.isToday, NotCurrent: !day.isCurrentMonth }, 'Day']">
    <span>
      {{ label }}
    </span>
  </li>
</template>
<style lang="scss" scoped>
.Day {
  @apply flex flex-col items-start justify-start w-full h-full border-l border-t border-outline text-lg leading-3 tracking-tight p-3 box-border select-none touch-none;

  &:nth-last-child(-n + 7) {
    @apply border-b;
  }

  &:nth-child(7n) {
    @apply border-r;
  }

  span {
    @apply flex items-center justify-center size-7 rounded-full text-base text-contrast font-bold font-montserrat box-border;
  }

  &:where(.Today) {
    span {
      @apply bg-primary text-app-bg;
    }
  }

  &:where(.NotCurrent) {
    @apply bg-surface;

    span {
      @apply text-calendar;
    }
  }
}
</style>
