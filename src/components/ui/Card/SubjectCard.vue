<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { CardAvatar } from '.'
import type { SubjectType } from '@/core/types/ui.types'
import { getCardDetails } from '@/core/utils/getCardDetails'

interface Props {
  startTime: string
  endTime: string
  auditory: string
  type: SubjectType
  subjectBrief: string
  subjectName: string
  isFullWidth?: boolean
}

const props = defineProps<Props>()

const { avatarColor, subjectType } = getCardDetails(props.type)
const avatarText: string = props.subjectBrief.slice(0, 2)
</script>

<template>
  <div class="CardContainer" :class="{ 'CardContainer-full': props.isFullWidth }">
    <div class="flex flex-row flex-nowrap justify-between items-center gap-4">
      <CardAvatar :letters="`${avatarText}`" :color="`${avatarColor}`" />
      <div class="flex flex-col gap-y-[5px]">
        <Title class="font-bold" variant="medium">
          {{ props.startTime }} - {{ props.endTime }} {{ props.auditory }}
          {{ subjectType }}
        </Title>
        <Title variant="big">{{ props.subjectName }}</Title>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
