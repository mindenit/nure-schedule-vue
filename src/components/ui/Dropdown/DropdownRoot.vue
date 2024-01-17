<script lang="ts" setup>
import {
  DropdownMenuRoot,
  useForwardPropsEmits,
  type DropdownMenuRootEmits,
  type DropdownMenuRootProps
} from 'radix-vue'

const props = defineProps<DropdownMenuRootProps>()
const emits = defineEmits<DropdownMenuRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot></slot>
  </DropdownMenuRoot>
</template>
