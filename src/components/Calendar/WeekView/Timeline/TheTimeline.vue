<script lang="ts" setup>
import { getTimeline } from '@/core/utils'

const timeline = getTimeline()
</script>
<template>
  <div class="WeekTimeline">
    <p v-for="item in timeline" :key="item" class="WeekTimelineItem">
      {{ item }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.WeekTimeline {
  @apply flex h-full flex-col items-center justify-between;
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
