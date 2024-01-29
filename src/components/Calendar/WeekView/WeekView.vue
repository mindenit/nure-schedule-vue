<script lang="ts" setup>
import { DATE_FORMAT } from '@/core/constants'
import type { CalendarDay } from '@/core/types'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import { inject, ref, type Ref } from 'vue'
import { WeekHeader } from './Header'
import { WeekGrid } from './Grid'

defineProps<{ days: CalendarDay[] }>()

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
  <WeekHeader
    :days="days"
    :selected-date="selectedDate"
    @select-date="(date) => $emit('selectDate', date)"
  />
  <WeekGrid :days="days" />
</template>
<style lang="css" scoped>
.WeekView {
  @apply flex w-full flex-row items-center justify-between;
}
</style>
