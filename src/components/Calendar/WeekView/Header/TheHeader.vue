<script lang="ts" setup>
import type { CalendarDay } from '@/core/types/calendar'
import HeaderItem from './HeaderItem.vue'
import { Button } from '@/components/ui/Button'
import { Icon } from '@iconify/vue'
import type { Dayjs } from 'dayjs'
import { toRefs } from 'vue'
import { dayjsClient } from '@/libs/dayjs'

const props = defineProps<{
  days: CalendarDay[]
  selectedDate: Dayjs
}>()

const { selectedDate, days } = toRefs(props)

const emit = defineEmits<{
  selectDate: [date: Dayjs]
}>()

const selectPrevious = () => {
  const previous = dayjsClient(selectedDate.value).subtract(1, 'week')
  emit('selectDate', previous)
}

const selectNext = () => {
  const next = dayjsClient(selectedDate.value).add(1, 'week')
  emit('selectDate', next)
}
</script>
<template>
  <header class="Wrapper">
    <Button variant="text" appearance="icon" @click="selectPrevious">
      <Icon icon="ic:baseline-chevron-left" />
    </Button>
    <div class="HeadersContainer">
      <HeaderItem v-for="day in days" :key="day.date" :day="day" />
    </div>
    <Button variant="text" appearance="icon" @click="selectNext">
      <Icon icon="ic:baseline-chevron-right" />
    </Button>
  </header>
</template>
<style lang="scss" scoped>
.Wrapper {
  @apply flex w-full flex-row items-center justify-between gap-4 rounded-full bg-surface p-3 max-sm:w-auto;
}

.HeadersContainer {
  @apply flex h-fit w-full flex-row gap-4 max-sm:gap-0;
}
</style>
