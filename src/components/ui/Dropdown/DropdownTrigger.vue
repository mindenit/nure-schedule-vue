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
  @apply flex items-center justify-between min-w-36 w-full h-12 text-base text-muted font-montserrat font-bold px-2 rounded-md box-border;

  &:hover,
  &:focus,
  &[data-state='open'] {
    @apply bg-secondary-container;
  }

  svg {
    @apply size-8;
  }
}
</style>
