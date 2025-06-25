<script lang="ts" setup>
import { SubjectCard, TextSubjectCard } from '@/components/ui/Card'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '@/components/ui/Dialog'
import { Title } from '@/components/ui/Title'
import { useCalendar } from '@/core/composables'
import { DATE_FORMAT } from '@/core/constants'
import { getDayPairs, horizontalScrollTo, toMonthName } from '@/core/utils'
import { dayjsClient } from '@/libs/dayjs'
import { Icon } from '@iconify/vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import type { Dayjs } from 'dayjs'
import type { Schedule } from 'nurekit'
import { RadioGroupItem, RadioGroupRoot } from 'radix-vue'
import { computed, nextTick, onMounted, ref } from 'vue'
import { DateSelector, DateSelectorItem } from './DateSelector'
import { DayMain } from './DayMain'

defineProps<{ pairs: Schedule[] }>()

const { selectedDate, monthDays: days, selectDate } = useCalendar()

const radioStateSingle = ref(selectedDate.value.format(DATE_FORMAT))

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})

const monthTitle = computed(() => {
  return `${toMonthName(selectedDate.value)} ${selectedDate.value.year()}`
})

const handleDateChange = (date: Dayjs) => {
  const formattedDate = date.format(DATE_FORMAT)

  radioStateSingle.value = date.format(DATE_FORMAT)

  selectDate(date)

  nextTick(() => {
    horizontalScrollTo(formattedDate, { behavior: 'instant' })
  })
}

const handleActiveDayChange = (value: string) => {
  const date = dayjsClient(value)

  selectDate(date)

  horizontalScrollTo(value)
}

onMounted(() => {
  horizontalScrollTo(radioStateSingle.value, { behavior: 'instant' })
})
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
  <section class="flex w-full flex-col gap-4" v-else>
    <div class="flex flex-row items-center justify-between">
      <Title variant="medium">{{ monthTitle }}</Title>
      <DateSelector @select-date="handleDateChange" />
    </div>
    <RadioGroupRoot
      v-model="radioStateSingle"
      as="ul"
      class="no-scrollbar flex h-10 w-auto flex-row gap-4 overflow-x-scroll"
      @update:model-value="handleActiveDayChange"
    >
      <RadioGroupItem
        :id="day.date"
        v-for="day in days"
        :key="day.date"
        as="li"
        class="flex h-10 min-w-10 select-none items-center justify-center rounded-full data-[state=checked]:bg-primary data-[state=checked]:text-app-bg"
        :value="day.date"
      >
        {{ dayjsClient(day.date).format('DD') }}
      </RadioGroupItem>
    </RadioGroupRoot>
    <div
      v-if="!getDayPairs(radioStateSingle, pairs).length"
      class="mt-4 box-border flex flex-col items-center justify-center"
    >
      <Icon icon="ic:baseline-emoji-emotions" class="size-24" />
      <Title variant="big">У цей день пар не має</Title>
    </div>
    <div v-else class="box-border flex w-full flex-col gap-4 pb-24">
      <DialogRoot
        v-for="(pair, index) in getDayPairs(radioStateSingle, pairs)"
        :key="`${pair.startedAt}-${pair.numberPair}-${index}`"
      >
        <DialogTrigger>
          <SubjectCard :pair="pair" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Розклад</DialogHeader>
          <TextSubjectCard :pair="pair" />
        </DialogContent>
      </DialogRoot>
    </div>
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
