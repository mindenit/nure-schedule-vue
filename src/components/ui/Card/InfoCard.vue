<script lang="ts" setup>
import { Title } from '@/components/ui/Title'

interface Props {
  title?: string
  subtitle?: string
  desc?: string
  isFullWidth?: boolean
}

defineEmits<{
  click: []
}>()

defineProps<Props>()
</script>

<template>
  <div class="CardContainer" :class="{ 'CardContainer-full': isFullWidth }" @click="$emit('click')">
    <div>
      <Title v-if="title" variant="big">{{ title }}</Title>
      <h5 class="Text" v-if="subtitle">
        {{ subtitle }}
      </h5>
    </div>
    <h5 class="Text" v-if="desc">
      {{ desc }}
    </h5>
  </div>
</template>

<style lang="scss" scoped>
.Text {
  @apply font-montserrat text-lg font-medium leading-5 tracking-[0.016rem] text-muted;
}
</style>
