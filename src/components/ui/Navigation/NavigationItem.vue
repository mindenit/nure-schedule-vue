<script lang="ts" setup>
import { useForwardProps } from 'radix-vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'

const props = defineProps<RouterLinkProps>()

const forwarded = useForwardProps(props)
</script>
<template>
  <RouterLink class="NavigationItem" v-bind="forwarded">
    <span class="Dot" aria-hidden></span>
    <slot></slot>
  </RouterLink>
</template>
<style lang="scss" scoped>
.NavigationItem {
  @apply flex flex-row items-center justify-start w-full h-14 text-sm font-normal text-muted bg-modal-bg rounded-full gap-3 px-4 box-border;
  .Dot {
    @apply hidden;
  }

  &:hover,
  &:focus {
    @apply bg-navbar-chip text-contrast;

    .Dot {
      @apply flex size-3 bg-contrast rounded-lg transition-all ease-in duration-300;
    }
  }
}
</style>
