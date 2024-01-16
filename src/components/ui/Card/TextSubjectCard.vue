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

const props = defineProps<Props>()
</script>
<template>
  <div class="flex flex-col items-start shrink-0 self-stretch w-full">
    <Title variant="light"
      >{{ props.weekday }} {{ props.date }} {{ props.startTime }}. {{ props.subjectType }}</Title
    >
    <Title variant="big">{{ props.subjectName }}</Title>
    <Title variant="medium">Авдиторія: {{ props.auditory }}</Title>
    <Title variant="medium">Викладач: {{ props.teacher }}</Title>

    <Title variant="medium">Група(-и):</Title>
    <div class="flex gap-1">
      <span v-for="item in props.groups ? props.groups : []" :key="item.id">{{ item.name }}</span>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
