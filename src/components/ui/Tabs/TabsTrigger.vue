<script lang="ts" setup>
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { Icon } from '@iconify/vue'

const props = defineProps<TabsTriggerProps>()

const forwarded = useForwardProps(props)
</script>
<template>
  <TabsTrigger class="TabsTrigger" v-bind="forwarded">
    <Icon icon="ic:baseline-check" area-hidden="true" />
    <slot></slot>
  </TabsTrigger>
</template>
<style lang="scss" scoped>
.TabsTrigger {
  @apply cursor-pointer gap-2 border border-outline bg-app-bg font-roboto font-normal text-contrast transition-all duration-[247ms];

  svg {
    @apply hidden overflow-hidden;
  }

  &:focus,
  &:hover {
    @apply bg-navbar-chip;
  }

  &:first-child {
    @apply rounded-l-3xl;
  }

  &:last-child {
    @apply rounded-r-3xl;
  }

  &[data-state='active'] {
    @apply bg-navbar-chip;

    svg {
      @apply block size-5;
    }
  }
}
</style>
