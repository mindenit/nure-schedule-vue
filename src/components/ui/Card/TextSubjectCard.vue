<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { stringifyGroups, stringifyTeachers, toDay, toDayWithMonth, toTime } from '@/core/utils'
import type { ISchedule } from 'nurekit'
import { computed } from 'vue'

interface Props {
  pair: ISchedule
}

const props = defineProps<Props>()

const weekday = computed(() => toDay(props.pair.startTime))
const date = computed(() => toDayWithMonth(props.pair.startTime))
const startTime = computed(() => toTime(props.pair.startTime))

const teachers = computed(() => stringifyTeachers(props.pair.teachers))
const groups = computed(() => stringifyGroups(props.pair.groups))
</script>
<template>
  <div class="TextCardContainer">
    <Title variant="light">{{ weekday }} {{ date }} {{ startTime }}. {{ pair.type }}</Title>
    <Title variant="big">{{ pair.subject.title }}</Title>
    <Title variant="medium">Авдиторія: {{ pair.auditory }}</Title>
    <Title variant="medium" v-if="pair.teachers.length">Викладач(-і): {{ teachers }}</Title>
    <div class="flex flex-wrap gap-1">
      <Title variant="medium">Група(-и):</Title>
      <p class="select-none">{{ groups }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.TextCardContainer {
  @apply flex w-full shrink-0 flex-col items-start gap-4 self-stretch;
}
</style>
