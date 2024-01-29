<script lang="ts" setup>
import type { CalendarDay } from '@/core/types'
import { WeekTimeline } from '../Timeline'
import { WeekEventsColumn } from '../EventColumn'

defineProps<{ days: CalendarDay[] }>()
</script>
<template>
  <div class="WeekGrid">
    <WeekTimeline />
    <div class="WeekEventsColumns">
      <WeekEventsColumn v-for="day in days" :key="day.date" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.WeekGrid {
  @apply grid h-full w-full grid-cols-[40px_auto_40px] gap-x-4 px-3;
}

.WeekEventsColumns {
  @apply flex h-full w-full flex-row divide-x divide-outline;
}
</style>
