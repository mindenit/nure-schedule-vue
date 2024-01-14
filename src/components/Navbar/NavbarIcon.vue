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
  @apply flex items-center justify-center w-full h-8 rounded-2xl tracking-tighter;

  svg {
    @apply w-6 h-6;
  }

  .IconBadge {
    @apply flex absolute items-center justify-center min-w-4 text-xs text-error-text bg-error-bg rounded-lg mb-2 ml-4 px-2;
  }
}
</style>
