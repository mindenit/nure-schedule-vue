<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import DialogClose from './DialogClose.vue'
import { DialogTitle } from 'radix-vue'
</script>
<template>
  <header class="DialogHeader">
    <DialogTitle class="DialogHeaderTitle">
      <slot></slot>
    </DialogTitle>
    <DialogClose as-child>
      <button class="DialogHeaderClose">
        <Icon icon="ic:baseline-close" />
      </button>
    </DialogClose>
  </header>
</template>
<style lang="scss" scoped>
.DialogHeader {
  @apply flex flex-row items-center justify-between w-full h-fit;

  .DialogHeaderTitle {
    @apply text-contrast text-sm font-medium leading-5 tracking-tight font-roboto;
  }

  .DialogHeaderClose {
    @apply flex items-center justify-center size-6 bg-transparent rounded-lg text-muted;
  }
}
</style>
