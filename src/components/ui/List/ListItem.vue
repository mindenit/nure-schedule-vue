<script lang="ts" setup>
import {
  useForwardPropsEmits,
  useId,
  type CheckboxRootEmits,
  type CheckboxRootProps
} from 'radix-vue'
import { Checkbox } from '../Checkbox'

const id = useId()
const props = defineProps<CheckboxRootProps>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <label class="ListItem" :for="id">
    <slot></slot>
    <Checkbox v-bind="forwarded" :id="id" />
  </label>
</template>
<style lang="scss" scoped>
.ListItem {
  @apply flex select-none flex-row items-center justify-between w-full h-12 font-roboto text-sm leading-6 not-italic text-contrast tracking-tight px-4 rounded-lg box-border;

  &:hover,
  &:focus-within {
    @apply bg-surface-container;
  }
}
</style>
