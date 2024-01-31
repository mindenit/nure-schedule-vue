<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { DATE_FORMAT } from '@/core/constants/calendar'
import type { CalendarDay } from '@/core/types'
import { getDayPairs } from '@/core/utils'
import { toMonthName } from '@/core/utils/dayjs'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import type { ISchedule } from 'nurekit'
import { RadioGroupRoot } from 'radix-vue'
import { computed, inject, ref, type ComputedRef, type Ref } from 'vue'
import { DateSelector } from './DateSelector'
import { MonthAside } from './MonthAside'
import { MonthDay } from './MonthDay'
import { MonthHeaders } from './MonthHeaders'

defineProps<{ days: CalendarDay[]; pairs: ISchedule[] }>()

defineEmits<{ selectDate: [date: Dayjs] }>()

const { today, selectedDate } = inject<{
  today: ComputedRef<string>
  selectedDate: Ref<Dayjs>
}>('calendar', {
  today: computed(() => dayjsClient().format(DATE_FORMAT)),
  selectedDate: ref(dayjsClient())
})

const radioStateSingle = ref(today.value)

const monthTitle = computed(() => {
  return `${toMonthName(selectedDate.value)} ${selectedDate.value.year()}`
})
</script>
<template>
  <section class="MonthView">
    <MonthAside :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
    <div class="Wrapper">
      <div class="Header">
        <Title variant="big">{{ monthTitle }}</Title>
        <DateSelector
          :current-date="today"
          :selected-date="selectedDate"
          @select-date="(date) => $emit('selectDate', date)"
        />
      </div>
      <MonthHeaders />
      <RadioGroupRoot v-model="radioStateSingle" :default-value="today" class="MonthDays">
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
  @apply box-border grid h-full w-full grid-cols-[1fr_2fr] flex-row gap-x-4 rounded-[5rem] bg-surface-container p-7;
}

.Wrapper {
  @apply box-border flex flex-col gap-3 rounded-[3rem] bg-app-bg p-7;
}

.Header {
  @apply flex w-full flex-row items-center justify-between;
}

.MonthDays {
  @apply grid h-full w-full list-none grid-cols-7 flex-row flex-wrap;
}
</style>