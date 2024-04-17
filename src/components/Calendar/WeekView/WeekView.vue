<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { useCalendar } from '@/core/composables'
import { Icon } from '@iconify/vue'
import type { ISchedule } from 'nurekit'
import { WeekGrid } from './Grid'
import { WeekHeader } from './Header'

defineProps<{ pairs: ISchedule[] }>()

const { weekDays: days } = useCalendar()
</script>
<template>
  <div class="flex size-full flex-col items-center justify-center gap-6" v-if="!pairs.length">
    <Icon icon="ic:baseline-emoji-emotions" class="size-32 text-muted" />
    <Title variant="large" class="text-center">На цьому тижні пар немає</Title>
  </div>
  <div v-else class="WeekView">
    <WeekHeader />
    <WeekGrid :days="days" :pairs="pairs" />
  </div>
</template>
<style lang="css" scoped>
.WeekView {
  @apply flex w-full flex-col items-center justify-between gap-y-2 max-sm:box-border max-sm:h-[68svh] max-sm:w-full max-sm:flex-nowrap max-sm:items-start max-sm:overflow-x-scroll max-sm:overflow-y-scroll;
}
</style>
