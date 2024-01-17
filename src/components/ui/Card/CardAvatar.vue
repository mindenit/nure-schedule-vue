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
    <Title class="text-white text-center" variant="medium">{{ letters }}</Title>
  </div>
</template>
<style lang="scss" scoped>
.AvatarContainer {
  @apply flex justify-center items-center shrink-0 rounded-[50%] text-center w-[48px] h-[48px];
}
</style>
