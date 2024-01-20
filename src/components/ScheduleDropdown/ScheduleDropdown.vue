<script lang="ts" setup>
import { useScheduleStore } from '@/core/stores'
import type { ScheduleType } from '@/core/types/schedule.types'
import { Icon } from '@iconify/vue'
import { Button } from '../ui/Button'
import {
  DropdownContent,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownRoot,
  DropdownTrigger
} from '../ui/Dropdown'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const store = useScheduleStore()

const { activeSchedule, recentSchedules } = storeToRefs(store)

const fallback = computed(() => {
  return !activeSchedule.value ? 'Оберіть розклад' : activeSchedule.value.name
})

const getItemIcon = (type: ScheduleType) => {
  switch (type) {
    case 'auditoriums':
      return 'ic:round-domain'
    case 'teachers':
      return 'ic:round-school'
    case 'groups':
      return 'ic:round-people-alt'
  }
}
</script>
<template>
  <DropdownRoot>
    <DropdownTrigger>
      <span class="flex flex-row gap-2 items-center justify-start">
        <Icon v-if="activeSchedule" class="size-5" :icon="getItemIcon(activeSchedule.type)" />
        {{ fallback }}
      </span>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownRadioGroup :model-value="store.activeSchedule?.name">
        <DropdownRadioItem
          v-for="(schedule, index) in recentSchedules"
          :key="index"
          :value="schedule.name"
        >
          <span
            class="flex flex-row gap-2 items-center justify-start select-none"
            @click="store.changeActiveSchedule(schedule)"
          >
            <Icon class="size-5" :icon="getItemIcon(schedule.type)" />
            {{ schedule.name }}
          </span>
          <Button variant="text" appearance="icon" @click="store.removeSchedule(schedule)">
            <Icon icon="ic:close" />
          </Button>
        </DropdownRadioItem>
      </DropdownRadioGroup>
    </DropdownContent>
  </DropdownRoot>
</template>
