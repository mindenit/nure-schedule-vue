<script lang="ts" setup>
import { DATE_FORMAT } from '@/core/constants'
import type { CalendarDay } from '@/core/types'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import { inject, ref, type Ref } from 'vue'
import { WeekHeader } from './Header'
import { WeekGrid } from './Grid'
import type { ISchedule } from 'nurekit'

defineProps<{ days: CalendarDay[]; pairs: ISchedule[] }>()

defineEmits<{ selectDate: [date: Dayjs] }>()

const { selectedDate } = inject<{
  today: string
  selectedDate: Ref<Dayjs>
}>('calendar', {
  today: dayjsClient().format(DATE_FORMAT),
  selectedDate: ref(dayjsClient())
})
</script>
<template>
  <div class="WeekView">
    <WeekHeader
      :days="days"
      :selected-date="selectedDate"
      @select-date="(date) => $emit('selectDate', date)"
    />
    <WeekGrid :days="days" :pairs="pairs" />
  </div>
</template>
<style lang="css" scoped>
.WeekView {
  @apply flex w-full flex-col items-center justify-between gap-y-2 max-sm:box-border max-sm:h-full max-sm:w-full max-sm:flex-nowrap max-sm:items-start max-sm:overflow-x-scroll max-sm:overflow-y-scroll max-sm:pb-[120px];
}
</style>
