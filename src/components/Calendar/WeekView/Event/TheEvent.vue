<script lang="ts" setup>
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '@/components/ui/Dialog'
import type { ISchedule } from 'nurekit'
import type { EventType, SubjectShortType } from '@/core/types'
import { computed } from 'vue'
import { getPairColor, toTime } from '@/core/utils'
import { TextSubjectCard } from '@/components/ui/Card'

const props = defineProps<{ pair: ISchedule; type: EventType }>()

const pairTime = computed(() => {
  return `${toTime(props.pair.startTime)}-${toTime(props.pair.endTime)}`
})

const pairColor = getPairColor(props.pair.type as SubjectShortType)
</script>
<template>
  <DialogRoot>
    <DialogTrigger>
      <div :class="`Event type-${type}`" :style="{ backgroundColor: pairColor }">
        <p class="EventText">{{ pair.subject.brief }}</p>
        <p class="EventText">{{ pair.type }}</p>
        <p v-if="type === 'default'" class="EventText">{{ pairTime }}</p>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Розклад</DialogHeader>
      <TextSubjectCard :pair="pair" />
    </DialogContent>
  </DialogRoot>
</template>
<style lang="scss" scoped>
.Event {
  @apply box-border flex size-full cursor-pointer flex-col items-start justify-start rounded-lg transition-all;

  &:where(.type-default) {
    @apply p-2;
  }

  &:where(.type-compact) {
    @apply px-2 py-1;
  }
}

.EventText {
  @apply touch-none select-none text-sm text-white;
}
</style>
