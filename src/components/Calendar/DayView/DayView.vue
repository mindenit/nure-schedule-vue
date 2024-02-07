<script lang="ts" setup>
import { DATE_FORMAT } from '@/core/constants'
import type { CalendarDay } from '@/core/types'
import { getDayPairs } from '@/core/utils'
import { dayjsClient } from '@/libs/dayjs'
import type { Dayjs } from 'dayjs'
import type { ISchedule } from 'nurekit'
import { RadioGroupRoot } from 'radix-vue'
import { computed, inject, ref, type ComputedRef, type Ref } from 'vue'
import { DateSelectorItem, DateSelector } from './DateSelector'
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

defineEmits<{ selectDate: [date: Dayjs] }>()
</script>
<template>
  <section class="DayView">
    <DayMain :active-date="radioStateSingle" :pairs="getDayPairs(radioStateSingle, pairs)" />
    <aside>
      <div class="DayAside">
        <DateSelector
          :current-date="today"
          :selected-date="selectedDate"
          @select-date="(day) => $emit('selectDate', day)"
        />
        <RadioGroupRoot class="MiniCalendar" v-model="radioStateSingle" as="ul">
          <DateSelectorItem v-for="day in monthDays" :key="day.date" :day="day" />
        </RadioGroupRoot>
      </div>
    </aside>
  </section>
</template>
<style lang="scss" scoped>
.DayView {
  @apply box-border grid size-full grid-cols-[3fr_1fr] gap-x-4 rounded-[5rem] bg-surface-container p-7;
}

.DayAside {
  @apply box-border flex flex-col rounded-3xl bg-app-bg p-3;
}

.MiniCalendar {
  @apply grid grid-cols-7 flex-row flex-wrap;
}
</style>
