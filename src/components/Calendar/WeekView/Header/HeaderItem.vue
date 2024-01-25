<script lang="ts" setup>
import type { CalendarDay } from '@/core/types/calendar.types'
import { dayjsClient } from '@/libs/dayjs'
import { computed } from 'vue'

const props = defineProps<{
  day: CalendarDay
}>()

const fallback = computed(() => {
  return `${dayjsClient(props.day.date).format('D')}.${dayjsClient(props.day.date).format('MM')}`
})
</script>
<template>
  <span :class="[{ active: day.isToday }, 'WeekHeader']">
    {{ fallback }}
  </span>
</template>
<style lang="scss" scoped>
.WeekHeader {
  @apply flex items-center justify-center w-full rounded-full p-2 box-border select-none touch-none;

  &:where(.active) {
    @apply bg-primary text-app-bg;
  }
}
</style>
