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
  @apply flex flex-row items-center justify-between w-full h-12 font-roboto text-sm leading-6 not-italic text-contrast tracking-tight px-3 rounded-lg box-border;

  &:hover,
  &:focus,
  &[data-highlighted],
  &[data-state='checked'] {
    @apply bg-secondary-container outline-outline;
  }
}
</style>
