<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { DATE_FORMAT } from '@/core/constants'
import type { CalendarDay } from '@/core/types'
import { getDayPairs, toMonthName } from '@/core/utils'
import { dayjsClient } from '@/libs/dayjs'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { Dayjs } from 'dayjs'
import type { ISchedule } from 'nurekit'
import { RadioGroupRoot } from 'radix-vue'
import { computed, inject, ref, type ComputedRef, type Ref } from 'vue'
import { DateSelector, DateSelectorItem } from './DateSelector'
import { DayMain } from './DayMain'

interface Props {
  monthDays: CalendarDay[]
  pairs: ISchedule[]
}

const { today, selectedDate } = inject<{
  today: ComputedRef<string>
  selectedDate: Ref<Dayjs>
}>('calendar', {
  today: computed(() => dayjsClient().format(DATE_FORMAT)),
  selectedDate: ref(dayjsClient())
})

const radioStateSingle = ref(today.value)

defineProps<Props>()

const emits = defineEmits<{ selectDate: [date: Dayjs] }>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})

const monthTitle = computed(() => {
  return `${toMonthName(selectedDate.value)} ${selectedDate.value.year()}`
})

const handleDateChange = (date: Dayjs) => {
  radioStateSingle.value = date.format(DATE_FORMAT)

  emits('selectDate', date)
}
</script>
<template>
  <section class="DayView" v-if="deviceClass === 'is-desktop'">
    <DayMain :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
    <aside>
      <div class="DayAside">
        <div class="flex flex-row items-center justify-between">
          <Title variant="medium">{{ monthTitle }}</Title>
          <DateSelector
            :current-date="today"
            :selected-date="selectedDate"
            @select-date="(day) => handleDateChange(day)"
          />
        </div>
        <RadioGroupRoot class="MiniCalendar" v-model="radioStateSingle" as="ul">
          <DateSelectorItem v-for="day in monthDays" :key="day.date" :day="day" />
        </RadioGroupRoot>
      </div>
    </aside>
  </section>

  <section class="DayView MobileDayView" v-else>
    <aside class="AsideContainer">
      <div class="DayAside">
        <div class="flex flex-row items-center justify-between">
          <Title variant="medium">{{ monthTitle }}</Title>
          <DateSelector :current-date="today" :selected-date="selectedDate" />
        </div>
        <RadioGroupRoot class="MiniCalendar" v-model="radioStateSingle" as="ul">
          <DateSelectorItem v-for="day in monthDays" :key="day.date" :day="day" />
        </RadioGroupRoot>
      </div>
    </aside>
    <DayMain :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
  </section>
</template>
<style lang="scss" scoped>
.DayView {
  @apply box-border grid size-full grid-cols-[3fr_1fr] gap-x-4 rounded-[5rem] bg-surface-container p-7;
  @apply max-sm:h-fit max-sm:grid-cols-1 max-sm:bg-transparent max-sm:p-0;
}

.MobileDayView {
  @apply pb-[90px];
}

.DayAside {
  @apply box-border flex flex-col rounded-3xl bg-app-bg p-3;
}

.MiniCalendar {
  @apply grid h-fit grid-cols-7 flex-row flex-wrap;
}

.AsideContainer {
  @apply h-fit;
}
</style>
