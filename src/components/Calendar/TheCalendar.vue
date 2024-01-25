<script lang="ts" setup>
import { useCalendar } from '@/core/composables'
import type { CalendarView } from '@/core/types/calendar.types'
import { provide, ref } from 'vue'
import { ScheduleDialog } from '../ScheduleDialog'
import { ScheduleDropdown } from '../ScheduleDropdown'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../ui/Tabs'
import MonthView from './MonthView/MonthView.vue'
import WeekView from './WeekView/WeekView.vue'

const view = ref<CalendarView>('month')
const { today, selectedDate, monthDays, weekDays, selectDate } = useCalendar()

provide('calendar', {
  today,
  selectedDate
})
</script>
<template>
  <TabsRoot v-model="view" as-child>
    <header class="CalendarHeader">
      <div>
        <ScheduleDropdown />
      </div>
      <div>
        <TabsList variant="compact">
          <TabsTrigger value="month"> Місяць </TabsTrigger>
          <TabsTrigger value="week"> Тиждень </TabsTrigger>
          <TabsTrigger value="day">День</TabsTrigger>
        </TabsList>
      </div>
      <ScheduleDialog />
    </header>
    <TabsContent value="month" as-child>
      <MonthView :days="monthDays" @select-date="(date) => selectDate(date)" />
    </TabsContent>
    <TabsContent value="week" as-child>
      <WeekView :days="weekDays" @select-date="(date) => selectDate(date)" />
    </TabsContent>
  </TabsRoot>
</template>
<style lang="scss" scoped>
.CalendarHeader {
  @apply flex flex-row items-center justify-between w-full h-fit px-5 box-border;
}
</style>
