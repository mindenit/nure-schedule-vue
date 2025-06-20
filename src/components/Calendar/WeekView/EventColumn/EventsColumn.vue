<script lang="ts" setup>
import { WeekEventCell } from '../EventCell'
import type { Schedule } from 'nurekit'
import { getPairsByTime, getTimeline } from '@/core/utils'

defineProps<{ pairs: Schedule[] }>()

const timeline = getTimeline()
</script>
<template>
  <div class="WeekEventColumn">
    <WeekEventCell v-for="item in timeline" :pairs="getPairsByTime(item, pairs)" :key="item" />
  </div>
</template>
<style lang="scss" scoped>
.WeekEventColumn {
  @apply flex h-full w-full min-w-24 flex-col;
}
</style>
