<script lang="ts" setup>
import type { CalendarDay } from '@/core/types'
import { dayjsClient } from '@/libs/dayjs'
import { RadioGroupItem } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{ day: CalendarDay }>()

const label = computed(() => dayjsClient(props.day.date).format('D'))
</script>
<template>
  <RadioGroupItem
    :value="day.date"
    :class="[{ 'not-current': !day.isCurrentMonth }, 'DateSelectorItem']"
    as="li"
  >
    {{ label }}
  </RadioGroupItem>
</template>
<style lang="scss" scoped>
.DateSelectorItem {
  @apply flex size-8 touch-none select-none items-center justify-center rounded-full transition-all;

  &:hover {
    @apply bg-surface-container;
  }

  &:where(.not-current) {
    @apply text-calendar;
  }

  &[data-state='checked'] {
    @apply rounded-full bg-primary text-app-bg;
  }
}
</style>
