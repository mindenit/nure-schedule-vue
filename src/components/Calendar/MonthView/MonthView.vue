<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { useCalendar } from '@/core/composables'
import { DATE_FORMAT } from '@/core/constants/calendar'
import { getDayPairs } from '@/core/utils'
import { toMonthName } from '@/core/utils/dayjs'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { Dayjs } from 'dayjs'
import type { ISchedule } from 'nurekit'
import { RadioGroupRoot } from 'radix-vue'
import { computed, ref } from 'vue'
import { DateSelector } from './DateSelector'
import { MonthAside } from './MonthAside'
import { MonthDay } from './MonthDay'
import { MonthHeaders } from './MonthHeaders'

defineProps<{ pairs: ISchedule[] }>()

const { selectedDate, monthDays: days, today, selectDate } = useCalendar()

const radioStateSingle = ref(today.value)

const monthTitle = computed(() => {
  return `${toMonthName(selectedDate.value)} ${selectedDate.value.year()}`
})

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})

const handleDateChange = (date: Dayjs) => {
  radioStateSingle.value = date.format(DATE_FORMAT)

  selectDate(date)
}
</script>
<template>
  <section class="MonthView" v-if="deviceClass === 'is-desktop'">
    <MonthAside :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
    <div class="Wrapper">
      <div class="Header">
        <Title variant="big">{{ monthTitle }}</Title>
        <DateSelector @select-date="handleDateChange" />
      </div>
      <MonthHeaders />
      <RadioGroupRoot v-model="radioStateSingle" :default-value="today" as="ul" class="MonthDays">
        <MonthDay
          v-for="day in days"
          :key="day.date"
          :day="day"
          :pairs="getDayPairs(day.date, pairs)"
        />
      </RadioGroupRoot>
    </div>
  </section>
  <section class="MobileMonthView" v-else>
    <div class="Wrapper">
      <div class="Header">
        <Title variant="big">{{ monthTitle }}</Title>
        <DateSelector
          :current-date="today"
          :selected-date="selectedDate"
          @select-date="selectDate"
        />
      </div>
      <MonthHeaders />
      <RadioGroupRoot v-model="radioStateSingle" :default-value="today" as="ul" class="MonthDays">
        <MonthDay
          v-for="day in days"
          :key="day.date"
          :day="day"
          :pairs="getDayPairs(day.date, pairs)"
        />
      </RadioGroupRoot>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.MonthView {
  @apply box-border grid w-full grid-cols-[1fr_2fr] gap-x-4 rounded-[5rem] bg-surface-container p-7;
}

.Wrapper {
  @apply box-border flex flex-col gap-3 rounded-[3rem] bg-app-bg p-7 max-sm:h-[65svh] max-sm:rounded-[1rem] max-sm:p-0;
}

.Header {
  @apply flex w-full flex-row items-center justify-between;
}

.MonthDays {
  @apply grid h-full w-full list-none grid-cols-7 flex-row flex-wrap;
}

.MobileMonthView {
  @apply flex h-full pb-[200px];
}
</style>
