<script lang="ts" setup>
import type { SubjectType } from '@/core/types/ui.types'
import { Title } from '@/components/ui/Title'

interface IData {
  id: string
  name: string
}

interface Props {
  weekday: string
  date: string
  startTime: string
  subjectType: SubjectType
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
      <!-- I can't remove the ternary operator from here. If I remove it, the code will stop working. I tried -->
      <!-- !Delete this comments before merging -->
      <span v-for="group in groups ? groups : []" :key="group.id">{{ group.name }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.TextCardContainer {
  @apply flex flex-col items-start shrink-0 self-stretch w-full;
}
</style>
