<script lang="ts" setup>
import { DialogClose, useForwardProps, type DialogCloseProps } from 'radix-vue'

const props = defineProps<DialogCloseProps>()

const forwarded = useForwardProps(props)
</script>
<template>
  <DialogClose v-bind="forwarded" :as-child="true">
    <slot></slot>
  </DialogClose>
</template>
