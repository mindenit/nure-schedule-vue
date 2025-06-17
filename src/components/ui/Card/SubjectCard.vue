<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import type { SubjectShortType } from '@/core/types'
import { getCardDetails, getCardIcon, toTime } from '@/core/utils'
import type { Schedule } from 'nurekit'
import { computed, toRefs } from 'vue'
import { CardAvatar } from '.'

interface Props {
  pair: Schedule
  isFullWidth?: boolean
}

const props = defineProps<Props>()

const { type, startedAt, endedAt, subject, auditorium } = toRefs(props.pair)

const { avatarColor, subjectType } = getCardDetails(type.value as SubjectShortType)

const avatarIcon = computed(() => {
  return getCardIcon(type.value as SubjectShortType)
})

const start = computed(() => {
  return toTime(startedAt.value)
})

const end = computed(() => {
  return toTime(endedAt.value)
})
</script>

<template>
  <div class="CardContainer" :class="{ 'CardContainer-full': isFullWidth }">
    <div class="InnerContainer">
      <CardAvatar :letters="avatarIcon" :color="avatarColor" as-icon />
      <div class="flex flex-col gap-y-1">
        <Title variant="medium">
          {{ start }}-{{ end }} {{ auditorium.name }}
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
