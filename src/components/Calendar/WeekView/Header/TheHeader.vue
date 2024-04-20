<script lang="ts" setup>
import { Button } from '@/components/ui/Button'
import { useCalendar } from '@/core/composables'
import { Icon } from '@iconify/vue'
import HeaderItem from './HeaderItem.vue'

const { weekDays: days, selectDate, nextWeek, previousWeek } = useCalendar()
</script>
<template>
  <header class="Wrapper">
    <Button variant="text" appearance="icon" @click="selectDate(previousWeek)">
      <Icon icon="ic:baseline-chevron-left" />
    </Button>
    <div class="HeadersContainer">
      <HeaderItem v-for="day in days" :key="day.date" :day="day" />
    </div>
    <Button variant="text" appearance="icon" @click="selectDate(nextWeek)">
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
