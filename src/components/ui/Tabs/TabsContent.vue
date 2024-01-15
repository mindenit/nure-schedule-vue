<script lang="ts" setup>
import { TabsContent, useForwardProps, type TabsContentProps } from 'radix-vue'

const props = defineProps<TabsContentProps>()

const forwarded = useForwardProps(props)
</script>
<template>
  <TabsContent v-bind="forwarded">
    <slot></slot>
  </TabsContent>
</template>
<style lang="css" scoped></style>
