<script lang="ts" setup>
import { TabsRoot, type TabsRootProps, type TabsRootEmits, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<TabsRootProps>()
const emits = defineEmits<TabsRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <TabsRoot v-bind="forwarded">
    <slot></slot>
  </TabsRoot>
</template>
