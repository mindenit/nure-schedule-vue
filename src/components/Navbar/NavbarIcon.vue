<script lang="ts" setup>
import { Icon } from '@iconify/vue'

defineProps<{ icon: string; count?: number }>()
</script>
<template>
  <div class="IconContainer">
    <span v-if="count" class="IconBadge" aria-hidden="true">{{ count }}</span>
    <Icon :icon="icon" />
  </div>
</template>
<style lang="scss" scoped>
.IconContainer {
  @apply flex h-8 w-full items-center justify-center rounded-2xl tracking-tighter transition-all duration-[247ms];

  svg {
    @apply h-6 w-6;
  }

  .IconBadge {
    @apply absolute mb-2 ml-4 flex min-w-4 items-center justify-center rounded-lg bg-error-bg px-2 text-xs text-error-text;
  }
}
</style>
