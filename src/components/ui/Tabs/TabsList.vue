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
  @apply flex flex-row w-full;

  @media not (max-width: theme('screens.sm')) {
    .TabsTrigger {
      @apply flex items-center justify-center min-w-32 max-w-[300px] py-2 px-3 flex-1 whitespace-nowrap overflow-hidden text-ellipsis;
      transition: flex 0.3s ease;
    }
  }

  @media (max-width: theme('screens.sm')) {
    &:where(.variant-compact) {
      .TabsTrigger {
        @apply items-center justify-center size-12 px-2 text-[0px];
      }

      .TabsTrigger::first-letter {
        @apply text-sm #{!important};
      }

      .TabsTrigger[data-state='active'] {
        @apply flex justify-center items-center w-32 text-base;
      }
    }

    &:where(.variant-default) {
      .TabsTrigger {
        @apply flex items-center justify-center grow text-sm py-2;
      }
    }
  }

  @media (min-width: theme('screens.md')) {
    .TabsTrigger {
      @apply flex items-center justify-center min-w-28 h-12 text-base;
    }
  }
}
</style>
