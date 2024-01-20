<script lang="ts" setup>
import dayjs from 'dayjs'
import { toRefs } from 'vue'

const props = defineProps<{
  currentDate: string
  selectedDate: dayjs.Dayjs
}>()

const { currentDate, selectedDate } = toRefs(props)

const emit = defineEmits<{
  dateSelected: [date: dayjs.Dayjs]
}>()

const selectPrevious = () => {
  const previous = dayjs(selectedDate.value).subtract(1, 'month')
  emit('dateSelected', previous)
}

const selectCurrent = () => {
  const current = dayjs(currentDate.value)
  emit('dateSelected', current)
}

const selectNext = () => {
  const next = dayjs(selectedDate.value).add(1, 'month')
  emit('dateSelected', next)
}
</script>
<template>
  <div class="DateSelector"></div>
</template>
<style lang="css" scoped></style>
