<script lang="ts" setup>
import { WeekEventCell } from '../EventCell'
import type { Schedule } from 'nurekit'
import { getPairsByTime, getTimeline } from '@/core/utils'
import { dayjsClient } from '@/libs/dayjs'

const props = defineProps<{ pairs: Schedule[] }>()

const timeline = getTimeline()

// Подробная отладка
console.log('=== WeekEventsColumn DEBUG ===')
console.log('Timeline:', timeline)
console.log('Total pairs for this day:', props.pairs.length)

if (props.pairs.length > 0) {
  console.log('Sample pair:', props.pairs[0])
  console.log('Sample pair startedAt:', props.pairs[0].startedAt)
  console.log('Sample pair time formatted:', dayjsClient(props.pairs[0].startedAt).format('HH:mm'))

  // Проверяем каждый временной слот
  timeline.forEach((timeSlot) => {
    const pairsForTime = getPairsByTime(timeSlot, props.pairs)
    console.log(`Time slot ${timeSlot}: ${pairsForTime.length} pairs`)
    if (pairsForTime.length > 0) {
      console.log(
        `  - Pairs:`,
        pairsForTime.map((p) => p.subject.brief)
      )
    }
  })

  // Показываем все уникальные времена в событиях
  const allEventTimes = props.pairs.map((pair) => dayjsClient(pair.startedAt).format('HH:mm'))
  console.log('All event times:', [...new Set(allEventTimes)])
}
</script>
<template>
  <div class="WeekEventColumn">
    <WeekEventCell v-for="item in timeline" :pairs="getPairsByTime(item, pairs)" :key="item" />

    <!-- Временный индикатор для отладки -->
    <div
      v-if="pairs.length > 0"
      class="debug-indicator"
      style="
        position: absolute;
        top: 0;
        right: 0;
        background: red;
        color: white;
        padding: 2px;
        font-size: 10px;
      "
    >
      {{ pairs.length }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.WeekEventColumn {
  @apply relative flex h-full w-full min-w-24 flex-col;
}
</style>
