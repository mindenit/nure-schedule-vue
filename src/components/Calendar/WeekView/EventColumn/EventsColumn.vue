<script lang="ts" setup>
import { TIMELINE } from '@/core/constants'
import { WeekEventCell } from '../EventCell'
import type { ISchedule } from 'nurekit'
import { getPairsByTime } from '@/core/utils'

defineProps<{ pairs: ISchedule[] }>()
</script>
<template>
  <div class="WeekEventColumn">
    <WeekEventCell v-for="item in TIMELINE" :pairs="getPairsByTime(item, pairs)" :key="item" />
  </div>
</template>
<style lang="scss" scoped>
.WeekEventColumn {
  @apply flex h-full w-full min-w-24 flex-col;
}
</style>
