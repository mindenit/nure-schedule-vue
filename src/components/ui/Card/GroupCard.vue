<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Title } from '@/components/ui/Title'

interface IData {
  id: string
  name: string
}

interface Props {
  group: IData
}

defineProps<Props>()

defineEmits<{
  close: []
  click: []
}>()
</script>
<template>
  <div class="CardContainer">
    <div class="InnerContainer">
      <div class="w-full" @click="$emit('click')">
        <Title variant="big">{{ group.name }}</Title>
      </div>
      <Icon icon="ic:baseline-close" @click="$emit('close')" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.InnerContainer {
  @apply flex w-full flex-row flex-nowrap items-center justify-between gap-4;
}
</style>
