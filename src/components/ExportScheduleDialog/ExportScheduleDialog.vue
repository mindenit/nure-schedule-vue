<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Button } from '../ui/Button'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '../ui/Dialog'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const { isGreater } = useBreakpoints(breakpointsTailwind)

defineEmits<{
  export: []
}>()
</script>
<template>
  <DialogRoot>
    <DialogTrigger>
      <Button v-if="isGreater('sm')" variant="outlined">
        Експортувати
        <Icon icon="ic:round-save" />
      </Button>
      <Button v-else variant="outlined" appearance="icon">
        <Icon icon="ic:round-save" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Експортувати розклад</DialogHeader>
      <p><b>Google Calendar:</b> Налаштування > Імпорт і експорт > Обрати файл > Імпортувати.</p>
      <p><b>Apple Calendar (Mac):</b> Відкрити файл.</p>
      <Button class="mt-auto w-full" variant="filled" @click="$emit('export')">
        Експорт до ICS
      </Button>
    </DialogContent>
  </DialogRoot>
</template>
