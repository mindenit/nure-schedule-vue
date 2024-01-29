<script lang="ts" setup>
import type { SubjectShortType } from '@/core/types'
import { Title } from '@/components/ui/Title'

interface IData {
  id: string
  name: string
}

interface Props {
  weekday: string
  date: string
  startTime: string
  subjectType: SubjectShortType
  subjectName: string
  auditory: string
  teacher: string
  groups: IData[]
}

defineProps<Props>()
</script>
<template>
  <div class="TextCardContainer">
    <Title variant="light">{{ weekday }} {{ date }} {{ startTime }}. {{ subjectType }}</Title>
    <Title variant="big">{{ subjectName }}</Title>
    <Title variant="medium">Авдиторія: {{ auditory }}</Title>
    <Title variant="medium">Викладач: {{ teacher }}</Title>

    <Title variant="medium">Група(-и):</Title>
    <div class="flex gap-1">
      <span v-for="group in groups ? groups : []" :key="group.id">{{ group.name }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.TextCardContainer {
  @apply flex w-full shrink-0 flex-col items-start self-stretch;
}
</style>
