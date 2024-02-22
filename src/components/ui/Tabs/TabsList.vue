<script lang="ts" setup>
import { TabsList, type TabsListProps, useForwardProps } from 'radix-vue'

const props = withDefaults(defineProps<TabsListProps & { variant?: 'default' | 'compact' }>(), {
  variant: 'default'
})

const forwarded = useForwardProps(props)
</script>
<template>
  <TabsList :class="`TabsList variant-${variant}`" v-bind="forwarded">
    <slot></slot>
  </TabsList>
</template>
<style lang="scss">
.TabsList {
  @apply flex w-full flex-row;

  @media not (max-width: theme('screens.sm')) {
    .TabsTrigger {
      @apply flex w-full flex-1 items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap px-3 py-2;
      transition: flex 0.3s ease;
    }
  }

  @media (max-width: theme('screens.sm')) {
    &:where(.variant-compact) {
      .TabsTrigger {
        @apply size-12 items-center justify-center px-2 text-[0px];
      }

      .TabsTrigger::first-letter {
        @apply text-sm #{!important};
      }

      .TabsTrigger[data-state='active'] {
        @apply flex w-28 items-center justify-center text-base;
      }
    }

    &:where(.variant-default) {
      .TabsTrigger {
        @apply flex grow items-center justify-center py-2 text-[10px] max-sm:text-base;
      }
    }
  }

  @media (min-width: theme('screens.md')) {
    .TabsTrigger {
      @apply flex h-12 min-w-28 items-center justify-center text-base;
    }
  }
}
</style>
