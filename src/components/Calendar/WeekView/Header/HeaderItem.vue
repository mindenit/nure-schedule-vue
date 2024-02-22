<script lang="ts" setup>
import type { CalendarDay } from '@/core/types'
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
  @apply box-border flex w-full touch-none select-none items-center justify-center rounded-full p-2 max-sm:w-24;

  &:where(.active) {
    @apply bg-primary text-app-bg;
  }
}
</style>
