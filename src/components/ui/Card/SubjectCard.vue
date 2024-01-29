<script lang="ts" setup>
import { computed } from 'vue'
import { Title } from '@/components/ui/Title'
import { CardAvatar } from '.'
import type { SubjectShortType } from '@/core/types'
import { getCardDetails } from '@/core/utils'

interface Props {
  startTime: string
  endTime: string
  auditory: string
  type: SubjectShortType
  subjectBrief: string
  subjectName: string
  isFullWidth?: boolean
}

const props = defineProps<Props>()

const { avatarColor, subjectType } = getCardDetails(props.type)
const avatarText = computed(() => {
  return props.subjectBrief.slice(0, 2)
})
</script>

<template>
  <div class="CardContainer" :class="{ 'CardContainer-full': isFullWidth }">
    <div class="InnerContainer">
      <CardAvatar :letters="avatarText" :color="avatarColor" />
      <div class="flex flex-col gap-y-[5px]">
        <Title class="font-bold" variant="medium">
          {{ startTime }} - {{ endTime }} {{ auditory }}
          {{ subjectType }}
        </Title>
        <Title variant="big">{{ subjectName }}</Title>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.InnerContainer {
  @apply flex flex-row flex-nowrap justify-between items-center gap-4;
}
</style>
