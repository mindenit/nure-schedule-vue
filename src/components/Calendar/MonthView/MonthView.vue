<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { DATE_FORMAT } from '@/core/constants/calendar'
import type { CalendarDay } from '@/core/types'
import { toDateWithMonth, toMonthName } from '@/core/utils/dayjs'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import { RadioGroupRoot } from 'radix-vue'
import { computed, inject, ref, type ComputedRef, type Ref } from 'vue'
import DateSelector from './DateSelector.vue'
import MonthDay from './MonthDay.vue'
import MonthHeaders from './MonthHeaders.vue'

defineProps<{ days: CalendarDay[] }>()

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

const asideTitle = computed(() => {
  return toDateWithMonth(radioStateSingle.value)
})
</script>
<template>
  <section class="MonthView">
    <aside class="flex flex-col p-4">
      <Title variant="large">{{ asideTitle }}</Title>
    </aside>
    <div class="box-border flex flex-col gap-3 rounded-[3rem] bg-app-bg p-7">
      <div class="flex w-full flex-row items-center justify-between">
        <Title variant="big">{{ monthTitle }}</Title>
        <DateSelector
          :current-date="today"
          :selected-date="selectedDate"
          @select-date="(date) => $emit('selectDate', date)"
        />
      </div>
      <MonthHeaders />
      <RadioGroupRoot v-model="radioStateSingle" :default-value="today" class="MonthDays">
        <MonthDay v-for="day in days" :key="day.date" :day="day" />
      </RadioGroupRoot>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.MonthView {
  @apply box-border grid h-full w-full grid-cols-[1fr_2fr] flex-row gap-x-4 rounded-[5rem] bg-surface-container p-7;
}

.MonthDays {
  @apply grid h-full w-full list-none grid-cols-7 flex-row flex-wrap;
}
</style>
