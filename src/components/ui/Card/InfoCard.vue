<script lang="ts" setup>
import { Title } from '@/components/ui/Title'

interface Props {
  title?: string
  subtitle?: string
  desc?: string
  isFullWidth?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div class="CardContainer" :class="{ 'CardContainer-full': props.isFullWidth }">
    <div>
      <Title v-if="props.title" variant="big">{{ title }}</Title>
      <h5
        class="Text font-montserrat text-lg leading-[20px] font-medium tracking-[0.016rem]"
        v-if="props.subtitle"
      >
        {{ subtitle }}
      </h5>
    </div>
    <h5
      class="Text font-montserrat text-lg leading-[20px] font-medium tracking-[0.016rem]"
      v-if="props.desc"
    >
      {{ desc }}
    </h5>
  </div>
</template>

<style lang="scss" scoped>
.Text {
  @apply text-muted;
}
</style>
