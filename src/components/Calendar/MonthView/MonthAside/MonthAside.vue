<script lang="ts" setup>
import { SubjectCard, TextSubjectCard } from '@/components/ui/Card'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '@/components/ui/Dialog'
import { Title } from '@/components/ui/Title'
import { PE_AUDITORIUM } from '@/core/constants'
import { toDayWithMonth } from '@/core/utils'
import { Icon } from '@iconify/vue'
import type { ISchedule } from 'nurekit'
import { computed } from 'vue'

const props = defineProps<{
  activeDate: string
  pairs: ISchedule[]
}>()

const title = computed(() => toDayWithMonth(props.activeDate))
</script>
<template>
  <aside class="MonthAside">
    <Title variant="large">{{ title }}</Title>
    <div v-if="!pairs.length" class="NoSubjectsFallback">
      <Icon icon="ic:baseline-emoji-emotions" class="size-24" />
      <Title variant="big"> Сьогодні пар немає </Title>
    </div>
    <div v-else class="SubjectsContainer">
      <template v-for="pair in pairs" :key="pair.startTime">
        <DialogRoot v-if="pair.auditory !== PE_AUDITORIUM">
          <DialogTrigger>
            <SubjectCard :pair="pair" :is-full-width="true" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Розклад</DialogHeader>
            <TextSubjectCard :pair="pair" />
          </DialogContent>
        </DialogRoot>
        <SubjectCard v-else :pair="pair" :is-full-width="true" />
      </template>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
.MonthAside {
  @apply box-border flex size-full flex-col gap-5 p-4;
}

.NoSubjectsFallback {
  @apply flex max-h-full w-full animate-fadeIn flex-col items-center justify-center gap-4;
}

.SubjectsContainer {
  @apply flex w-full animate-fadeIn flex-col gap-4;
}
</style>
