<script lang="ts" setup>
import { Button } from '@/components/ui/Button'
import { dayjsClient } from '@/libs/dayjs'
import { Icon } from '@iconify/vue'
import type { Dayjs } from 'dayjs'
import { toRefs } from 'vue'

interface Props {
  currentDate: string
  selectedDate: Dayjs
}

const props = defineProps<Props>()

const { selectedDate, currentDate } = toRefs(props)

const emit = defineEmits<{
  selectDate: [date: Dayjs]
}>()

const selectPrevious = () => {
  const previous = dayjsClient(selectedDate.value).subtract(1, 'month')
  emit('selectDate', previous)
}

const selectCurrent = () => {
  const current = dayjsClient(currentDate.value)
  emit('selectDate', current)
}

const selectNext = () => {
  const next = dayjsClient(selectedDate.value).add(1, 'month')
  emit('selectDate', next)
}
</script>
<template>
  <nav class="flex flex-row items-center justify-center">
    <Button variant="text" appearance="icon" @click="selectPrevious">
      <Icon icon="ic:baseline-chevron-left" />
    </Button>
    <Button variant="text" @click="selectCurrent"> Сьогодні </Button>
    <Button variant="text" appearance="icon" @click="selectNext">
      <Icon icon="ic:baseline-chevron-right" />
    </Button>
  </nav>
</template>
