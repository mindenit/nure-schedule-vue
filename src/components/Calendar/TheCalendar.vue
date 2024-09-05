<script lang="ts" setup>
import { useCalendar, useDownload, useGlobalError } from '@/core/composables'
import { useFiltersStore, useSchedulesStore } from '@/core/stores'
import type { CalendarView, ScheduleType } from '@/core/types'
import { getSchedule, toICS } from '@/core/utils'
import { useQuery } from '@tanstack/vue-query'
import { ref, toRefs, watchEffect } from 'vue'
import { ExportScheduleDialog } from '../ExportScheduleDialog'
import { ScheduleDialog } from '../ScheduleDialog'
import { ScheduleDropdown } from '../ScheduleDropdown'
import { Loader } from '../ui/Loader'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../ui/Tabs'
import DayView from './DayView/DayView.vue'
import MonthView from './MonthView/MonthView.vue'
import WeekView from './WeekView/WeekView.vue'

const view = ref<CalendarView>('month')

const { firstDay, lastDay } = useCalendar()
const { isGlobalError } = useGlobalError()

const recentSchedules = useSchedulesStore()
const filtersStore = useFiltersStore()
const { activeSchedule } = toRefs(recentSchedules)

const { data, isLoading, isError } = useQuery({
  queryKey: [activeSchedule, firstDay, lastDay],
  queryFn: async () => {
    return getSchedule({
      type: activeSchedule.value?.type as ScheduleType,
      name: activeSchedule.value?.name as string,
      startTime: firstDay.value,
      endTime: lastDay.value
    })
  }
})

watchEffect(() => {
  if (isError) {
    isGlobalError.value = true
  } else {
    isGlobalError.value = false
  }
})

const { downloadFile } = useDownload(toICS)
</script>
<template>
  <TabsRoot v-model="view" as-child>
    <header class="CalendarHeader">
      <div>
        <ScheduleDropdown />
      </div>
      <TabsList variant="compact">
        <TabsTrigger value="month">Місяць</TabsTrigger>
        <TabsTrigger value="week">Тиждень</TabsTrigger>
        <TabsTrigger value="day">День</TabsTrigger>
      </TabsList>
      <div class="MobileButtonContainer">
        <ExportScheduleDialog v-if="activeSchedule" @export="downloadFile(activeSchedule)" />
        <ScheduleDialog />
      </div>
    </header>
    <Loader v-show="isLoading" />
    <template v-if="data">
      <TabsContent value="month" as-child>
        <MonthView :pairs="filtersStore.applyFilters(data)" />
      </TabsContent>
      <TabsContent value="week" as-child>
        <WeekView :pairs="filtersStore.applyFilters(data)" />
      </TabsContent>
      <TabsContent value="day" as-child>
        <DayView :pairs="filtersStore.applyFilters(data)" />
      </TabsContent>
    </template>
  </TabsRoot>
</template>
<style lang="scss" scoped>
.CalendarHeader {
  @apply box-border flex h-fit w-full flex-row items-center justify-between px-5 max-sm:flex-row max-sm:gap-2 max-sm:px-0;
}
</style>
