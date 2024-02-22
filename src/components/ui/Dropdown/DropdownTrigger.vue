<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { DropdownMenuTrigger, useForwardProps, type DropdownMenuTriggerProps } from 'radix-vue'

const props = defineProps<DropdownMenuTriggerProps>()

const forwarded = useForwardProps(props)
</script>
<template>
  <DropdownMenuTrigger class="DropdownTrigger" v-bind="forwarded">
    <slot></slot>

    <Icon icon="ic:baseline-chevron-right" />
  </DropdownMenuTrigger>
</template>
<style lang="scss" scoped>
.DropdownTrigger {
  @apply box-border flex h-12 w-full min-w-36 items-center justify-between rounded-md px-2 font-montserrat text-base font-bold text-muted max-sm:text-sm;

  &:hover,
  &:focus,
  &[data-state='open'] {
    @apply bg-secondary-container;
  }

  svg {
    @apply size-8 max-sm:size-6;
  }
}
</style>
