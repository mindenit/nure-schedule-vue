<script lang="ts" setup>
import { computed } from 'vue'
import { Event } from '../Event'
import type { ISchedule } from 'nurekit'

const props = defineProps<{ pairs: ISchedule[] }>()

const type = computed(() => (props.pairs.length > 1 ? 'compact' : 'default'))
</script>
<template>
  <div class="ColumnItem">
    <Event v-for="pair in pairs" :key="pair.startTime" :pair="pair" :type="type" />
  </div>
</template>
<style lang="scss" scoped>
.ColumnItem {
  @apply box-border flex w-full flex-col items-end justify-start gap-2 border-b border-outline p-2;
  scrollbar-width: none;

  &:nth-child(even) {
    @apply h-5;
  }

  &:nth-child(odd) {
    @apply h-32 overflow-hidden overflow-y-scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &:last-child {
    @apply hidden overflow-hidden;
  }
}
</style>
