<script lang="ts" setup>
import { TIMELINE } from '@/core/constants/calendar'
</script>
<template>
  <div class="WeekTimeline">
    <p v-for="item in TIMELINE" :key="item" class="WeekTimelineItem">
      {{ item }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.WeekTimeline {
  @apply flex flex-col items-center justify-between h-full;
}

.WeekTimelineItem {
  @apply text-sm text-contrast;

  &:nth-child(odd) {
    @apply mb-24;
  }

  &:nth-child(even) {
    @apply mb-3;
  }
}
</style>
