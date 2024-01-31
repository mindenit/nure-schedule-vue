<script lang="ts" setup>
import { useSchedulesStore } from '@/core/stores'
import type { ScheduleType } from '@/core/types'
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

const store = useSchedulesStore()

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
      <span class="Trigger">
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
          <span class="TriggerText" @click="store.changeActiveSchedule(schedule)">
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
<style lang="scss" scoped>
.Trigger {
  @apply flex flex-row items-center justify-start gap-2;
}

.TriggerText {
  @apply flex w-full touch-none select-none flex-row items-center justify-start gap-2;
}
</style>
