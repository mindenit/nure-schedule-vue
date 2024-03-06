<script lang="ts" setup>
import { Dialog } from 'radix-vue/namespaced'
import type { CalendarDay } from '@/core/types'
import type { ISchedule } from 'nurekit'
import { Button } from '@/components/ui/Button'
import { Icon } from '@iconify/vue'
import { Title } from '@/components/ui/Title'
import { computed } from 'vue'
import { toDayWithMonth } from '@/core/utils'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '@/components/ui/Dialog'
import { SubjectCard, TextSubjectCard } from '@/components/ui/Card'

const props = defineProps<{ day: CalendarDay; pairs: ISchedule[] }>()

const title = computed(() => toDayWithMonth(props.day.date))
</script>
<template>
  <Dialog.Root>
    <Dialog.Trigger as-child>
      <slot></slot>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Content class="DayDialogContent">
        <header class="DayDialogHeader">
          <Dialog.Close as-child>
            <Button variant="text" appearance="icon">
              <Icon icon="ic:baseline-arrow-back" />
            </Button>
          </Dialog.Close>
          <Dialog.Title as-child>
            <Title variant="large">{{ title }}</Title>
          </Dialog.Title>
        </header>
        <main :class="[{ empty: !pairs.length }, 'DayDialogMain']">
          <template v-if="!pairs.length">
            <Icon icon="ic:baseline-emoji-emotions" class="size-24" />
            <Title variant="big">У цей день пар не має</Title>
          </template>
          <template v-else>
            <DialogRoot v-for="(pair, index) in pairs" :key="index">
              <DialogTrigger>
                <SubjectCard :pair="pair" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>{{ pair.subject.title }}</DialogHeader>
                <TextSubjectCard :pair="pair" />
              </DialogContent>
            </DialogRoot>
          </template>
        </main>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
</template>
<style lang="scss" scoped>
.DayDialogContent {
  @apply fixed bottom-0 z-10 flex h-dvh w-full flex-col bg-app-bg;
}

.DayDialogHeader {
  @apply box-border flex h-1/5 w-full flex-col items-start justify-between bg-surface-variant p-4;
}

.DayDialogMain {
  @apply box-border flex size-full flex-col gap-3 p-4;

  &:where(.empty) {
    @apply items-center justify-center;
  }

  &:not(:where(.empty)) {
    @apply items-start justify-start overflow-y-auto;
  }
}
</style>
