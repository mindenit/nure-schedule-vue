<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { Title } from '@/components/ui/Title'

interface IData {
  id: string
  name: string
}

interface Props {
  group: IData
  onCloseClick: () => void
  onClick: () => void
}

defineProps<Props>()
</script>
<template>
  <div class="CardContainer">
    <div class="InnerContainer">
      <div class="w-full" @click="onClick">
        <Title variant="big">{{ group.name }}</Title>
      </div>
      <Icon icon="ic:baseline-close" @click="onCloseClick" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.InnerContainer {
  @apply w-full flex flex-row flex-nowrap justify-between items-center gap-4;
}
</style>
