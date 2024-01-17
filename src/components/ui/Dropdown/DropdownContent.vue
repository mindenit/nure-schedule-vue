<script lang="ts" setup>
import {
  DropdownMenuContent,
  useForwardPropsEmits,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  DropdownMenuPortal
} from 'radix-vue'

const props = defineProps<DropdownMenuContentProps>()
const emits = defineEmits<DropdownMenuContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <DropdownMenuPortal>
    <DropdownMenuContent class="DropdownContent" v-bind="forwarded" :side-offset="4">
      <slot></slot>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
<style lang="scss">
.DropdownContent {
  @apply flex flex-col p-3 min-w-52 w-auto bg-surface shadow-lg shadow-black/40 rounded-xl box-border;
}
</style>
