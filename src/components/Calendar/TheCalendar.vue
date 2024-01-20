<script lang="ts" setup>
import { ref } from 'vue'
import { ScheduleDialog } from '../ScheduleDialog'
import { ScheduleDropdown } from '../ScheduleDropdown'
import type { CalendarView } from '@/core/types/calendar.types'
import { TabsList, TabsTrigger, TabsRoot, TabsContent } from '../ui/Tabs'
import MonthView from './MonthView/MonthView.vue'
import { useCalendar } from '@/core/composables'

const view = ref<CalendarView>('month')
const { days } = useCalendar()
</script>
<template>
  <TabsRoot v-model="view" as-child>
    <header class="CalendarHeader">
      <div class="flex flex-row items-center justify-start gap-3">
        <ScheduleDropdown />
        <TabsList variant="compact">
          <TabsTrigger value="month">Місяць</TabsTrigger>
          <TabsTrigger value="week">Тиждень</TabsTrigger>
          <TabsTrigger value="day">День</TabsTrigger>
        </TabsList>
      </div>
      <ScheduleDialog />
    </header>
    <TabsContent value="month" as-child>
      <MonthView :days="days" />
    </TabsContent>
  </TabsRoot>
</template>
<style lang="scss" scoped>
.CalendarHeader {
  @apply flex flex-row items-center justify-between w-full h-fit px-5 box-border;
}
</style>
