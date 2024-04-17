<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { useCalendar } from '@/core/composables'
import { DATE_FORMAT } from '@/core/constants'
import { getDayPairs, toMonthName } from '@/core/utils'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { Dayjs } from 'dayjs'
import type { ISchedule } from 'nurekit'
import { RadioGroupRoot } from 'radix-vue'
import { computed, ref } from 'vue'
import { DateSelector, DateSelectorItem } from './DateSelector'
import { DayMain } from './DayMain'

defineProps<{ pairs: ISchedule[] }>()

const { selectedDate, today, monthDays: days, selectDate } = useCalendar()

const radioStateSingle = ref(today.value)

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})

const monthTitle = computed(() => {
  return `${toMonthName(selectedDate.value)} ${selectedDate.value.year()}`
})

const handleDateChange = (date: Dayjs) => {
  radioStateSingle.value = date.format(DATE_FORMAT)

  selectDate(date)
}
</script>
<template>
  <section class="DayView" v-if="deviceClass === 'is-desktop'">
    <DayMain :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
    <aside>
      <div class="DayAside">
        <div class="flex flex-row items-center justify-between">
          <Title variant="medium">{{ monthTitle }}</Title>
          <DateSelector @select-date="(day) => handleDateChange(day)" />
        </div>
        <RadioGroupRoot class="MiniCalendar" v-model="radioStateSingle" as="ul">
          <DateSelectorItem v-for="day in days" :key="day.date" :day="day" />
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
          <DateSelectorItem v-for="day in days" :key="day.date" :day="day" />
        </RadioGroupRoot>
      </div>
    </aside>
    <DayMain :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
  </section>
</template>
<style lang="scss" scoped>
.DayView {
  @apply box-border grid size-full grid-cols-[3fr_1fr] gap-x-4 rounded-[5rem] bg-surface-container p-7 max-sm:h-fit max-sm:grid-cols-1 max-sm:bg-transparent max-sm:p-0;
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
