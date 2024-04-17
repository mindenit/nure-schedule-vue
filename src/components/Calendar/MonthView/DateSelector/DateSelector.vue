<script lang="ts" setup>
import { Button } from '@/components/ui/Button'
import { useCalendar } from '@/core/composables'
import { Icon } from '@iconify/vue'
import { Dayjs } from 'dayjs'

const { currentMonth, nextMonth, previousMonth } = useCalendar()

defineEmits<{ selectDate: [date: Dayjs] }>()
</script>
<template>
  <div class="flex items-center">
    <Button variant="text" appearance="icon" @click="$emit('selectDate', previousMonth)">
      <Icon icon="ic:baseline-chevron-left" />
    </Button>
    <Button variant="text" @click="$emit('selectDate', currentMonth)">Сьогодні</Button>
    <Button variant="text" appearance="icon" @click="$emit('selectDate', nextMonth)">
      <Icon icon="ic:baseline-chevron-right" />
    </Button>
  </div>
</template>
