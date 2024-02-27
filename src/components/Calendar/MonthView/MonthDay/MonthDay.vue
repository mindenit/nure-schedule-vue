<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { CalendarDay } from '@/core/types'
import { getPairsCountPlural } from '@/core/utils'
import { dayjsClient } from '@/libs/dayjs'
import type { ISchedule } from 'nurekit'
import { RadioGroupItem, useForwardProps, type RadioGroupItemProps } from 'radix-vue'
import { computed } from 'vue'
import { MobileDayDialog } from '../MobileDayDialog'

interface Props extends RadioGroupItemProps {
  day: CalendarDay
  pairs: ISchedule[]
}

const { isGreater } = useBreakpoints(breakpointsTailwind)

const props = defineProps<Props>()

const forwarded = useForwardProps(props)

const label = computed(() => {
  return dayjsClient(props.day.date).format('D')
})

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})

const pairsCount = computed(() => {
  if (deviceClass.value === 'is-desktop') {
    return getPairsCountPlural(props.pairs.length)
  }
  return props.pairs.length
})
</script>
<template>
  <template v-if="isGreater('sm')">
    <RadioGroupItem
      v-bind="forwarded"
      :class="[{ 'not-current': !day.isCurrentMonth }, 'Day']"
      :value="day.date"
      as="li"
    >
      <span class="Indicator">
        {{ label }}
      </span>
      <span v-if="pairs.length" class="Pairs">
        {{ pairsCount }}
      </span>
    </RadioGroupItem>
  </template>
  <template v-else>
    <MobileDayDialog :day="day" :pairs="pairs">
      <li :class="[{ 'not-current': !day.isCurrentMonth, active: day.isToday }, 'Day']">
        <span class="Indicator">
          {{ label }}
        </span>
        <span v-if="pairs.length" class="Pairs">
          {{ pairsCount }}
        </span>
      </li>
    </MobileDayDialog>
  </template>
</template>
<style lang="scss" scoped>
.Day {
  @apply box-border flex h-full min-h-20 w-full cursor-pointer touch-none select-none flex-col items-start justify-between border-l border-t border-outline p-3 text-lg leading-3 tracking-tight;

  &:nth-child(1) {
    @apply rounded-tl-2xl;
  }

  &:nth-child(7) {
    @apply rounded-tr-2xl;
  }

  &:nth-last-child(1) {
    @apply rounded-br-2xl;
  }

  &:nth-last-child(7) {
    @apply rounded-bl-2xl;
  }

  &:nth-last-child(-n + 7) {
    @apply border-b;
  }

  &:nth-child(7n) {
    @apply border-r;
  }

  .Indicator {
    @apply box-border flex size-7 items-center justify-center rounded-full font-montserrat text-base font-bold text-contrast;
  }

  .Pairs {
    @apply box-border flex h-6 w-auto flex-row items-center justify-center rounded-full bg-error-bg px-2 text-sm text-app-bg;
  }

  &[data-state='checked'],
  &:where(.active) {
    .Indicator {
      @apply bg-primary text-app-bg;
    }
  }

  &:where(.not-current) {
    @apply bg-surface;

    .Indicator {
      @apply text-calendar;
    }
  }
}
</style>
