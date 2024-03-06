<script lang="ts" setup>
import {
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemProps,
  type DropdownMenuRadioItemEmits,
  useForwardPropsEmits
} from 'radix-vue'

const props = defineProps<DropdownMenuRadioItemProps>()
const emits = defineEmits<DropdownMenuRadioItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <DropdownMenuRadioItem class="DropdownRadioItem" v-bind="forwarded">
    <slot></slot>
  </DropdownMenuRadioItem>
</template>
<style lang="scss" scoped>
.DropdownRadioItem {
  @apply box-border flex h-12 w-full flex-row items-center justify-between rounded-lg px-3 font-roboto text-sm not-italic leading-6 tracking-tight text-contrast transition-all;

  &:hover,
  &:focus,
  &[data-highlighted],
  &[data-state='checked'] {
    @apply bg-secondary-container outline-outline;
  }
}
</style>
