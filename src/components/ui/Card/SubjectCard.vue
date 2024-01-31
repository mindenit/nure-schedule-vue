<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import type { SubjectShortType } from '@/core/types'
import { getCardDetails, getCardIcon, toTime } from '@/core/utils'
import type { ISchedule } from 'nurekit'
import { computed, toRefs } from 'vue'
import { CardAvatar } from '.'

interface Props {
  pair: ISchedule
  isFullWidth?: boolean
}

const props = defineProps<Props>()

const { type, startTime, endTime, subject, auditory } = toRefs(props.pair)

const { avatarColor, subjectType } = getCardDetails(type.value as SubjectShortType)

const avatarIcon = computed(() => {
  return getCardIcon(type.value as SubjectShortType)
})

const start = computed(() => {
  return toTime(startTime.value)
})

const end = computed(() => {
  return toTime(endTime.value)
})
</script>

<template>
  <div class="CardContainer" :class="{ 'CardContainer-full': isFullWidth }">
    <div class="InnerContainer">
      <CardAvatar :letters="avatarIcon" :color="avatarColor" as-icon />
      <div class="flex flex-col gap-y-1">
        <Title variant="medium">
          {{ start }}-{{ end }} {{ auditory }}
          {{ subjectType }}
        </Title>
        <Title variant="big">{{ subject.title }}</Title>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.InnerContainer {
  @apply flex flex-row flex-nowrap items-center justify-between gap-4;
}
</style>
