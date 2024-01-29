<script lang="ts" setup>
import { Title } from '@/components/ui/Title'

interface Props {
  letters: string
  color: string
}

defineProps<Props>()
</script>
<template>
  <div class="AvatarContainer" :style="{ background: color }">
    <Title class="text-center text-white" variant="medium">{{ letters }}</Title>
  </div>
</template>
<style lang="scss" scoped>
.AvatarContainer {
  @apply flex size-12 shrink-0 items-center justify-center rounded-full text-center;
}
</style>
