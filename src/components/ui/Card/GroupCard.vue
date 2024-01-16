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

const props = defineProps<Props>()
</script>
<template>
  <div class="CardContainer">
    <div class="w-full flex flex-row flex-nowrap justify-between items-center gap-4">
      <div class="w-full" @click="props.onClick">
        <Title variant="big">{{ props.group.name }}</Title>
      </div>
      <Icon icon="ic:baseline-close" @click="props.onCloseClick" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
