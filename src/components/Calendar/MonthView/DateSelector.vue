<script lang="ts" setup>
import { dayjsClient } from '@/libs/dayjs'
import { Icon } from '@iconify/vue'
import { Dayjs } from 'dayjs'
import { toRefs } from 'vue'
import { Button } from '../../ui/Button'

const props = defineProps<{
  currentDate: string
  selectedDate: Dayjs
}>()

const { currentDate, selectedDate } = toRefs(props)

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
  <div class="flex items-center">
    <Button variant="text" appearance="icon" @click="selectPrevious">
      <Icon icon="ic:baseline-chevron-left" />
    </Button>
    <Button variant="text" @click="selectCurrent"> Сьогоді </Button>
    <Button variant="text" appearance="icon" @click="selectNext">
      <Icon icon="ic:baseline-chevron-right" />
    </Button>
  </div>
</template>
