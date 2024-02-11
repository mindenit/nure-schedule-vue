<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { Icon } from '@iconify/vue'

interface Props {
  letters: string
  color: string
  asIcon?: boolean
}

withDefaults(defineProps<Props>(), { asIcon: false })
</script>
<template>
  <div class="AvatarContainer" :style="{ background: color }">
    <Title v-if="!asIcon" class="text-center text-white" variant="medium">{{ letters }}</Title>
    <Icon v-else :icon="letters" class="size-8 text-white" />
  </div>
</template>
<style lang="scss" scoped>
.AvatarContainer {
  @apply flex size-12 shrink-0 items-center justify-center rounded-full text-center;
}
</style>
