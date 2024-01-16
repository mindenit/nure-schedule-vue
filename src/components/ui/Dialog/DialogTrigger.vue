<script lang="ts" setup>
import { DialogTrigger, useForwardProps, type DialogTriggerProps } from 'radix-vue'

const props = defineProps<DialogTriggerProps>()

const forwarded = useForwardProps(props)
</script>
<template>
  <DialogTrigger v-bind="forwarded" :as-child="true">
    <slot></slot>
  </DialogTrigger>
</template>
