<script lang="ts" setup>
import { DAY_WITH_MONTH_FORMAT } from '@/core/constants'
import { dayjsClient } from '@/libs/dayjs'
import type { ISchedule } from 'nurekit'
import { computed } from 'vue'
import { Title } from '@/components/ui/Title'
import { Icon } from '@iconify/vue'
import { DialogRoot, DialogContent, DialogTrigger, DialogHeader } from '@/components/ui/Dialog'
import { SubjectCard, TextSubjectCard } from '@/components/ui/Card'
import { PE_AUDITORIUM } from '@/core/constants'

const props = defineProps<{ activeDate: string; pairs: ISchedule[] }>()

const title = computed(() => {
  return dayjsClient(props.activeDate).locale('uk').format(DAY_WITH_MONTH_FORMAT)
})
</script>
<template>
  <aside class="DayMain">
    <Title variant="large">{{ title }}</Title>
    <div v-if="!pairs.length" class="NoSubjectsFallback">
      <Icon icon="ic:baseline-emoji-emotions" class="size-24" />
      <Title variant="big">Сьогодні пар немає</Title>
    </div>
    <div v-else class="SubjectsContainer">
      <template v-for="pair in pairs" :key="pair.startTime">
        <DialogRoot v-if="pair.auditory !== PE_AUDITORIUM">
          <DialogTrigger>
            <SubjectCard :pair="pair" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Розклад</DialogHeader>
            <TextSubjectCard :pair="pair" />
          </DialogContent>
        </DialogRoot>
        <SubjectCard v-else :pair="pair" />
      </template>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
.DayMain {
  @apply box-border flex size-full flex-col gap-5 p-4;
  @apply max-sm:p-0;
}

.NoSubjectsFallback {
  @apply flex max-h-full w-full animate-fadeIn flex-col items-center justify-center gap-4;
}

.SubjectsContainer {
  @apply flex w-full animate-fadeIn flex-row flex-wrap gap-4;
}
</style>
