<script lang="ts" setup>
import { Logo } from '@/components/ui/Logo'
interface Props {
  title: string
}

defineProps<Props>()
</script>
<template>
  <div class="Layout">
    <div class="LayoutContainer">
      <Logo>{{ title }}</Logo>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Layout {
  @apply flex h-dvh w-full flex-col items-center justify-center;
}
.LayoutContainer {
  @apply flex w-[320px] flex-col items-center justify-center gap-5 bg-transparent;

  @media (min-width: theme('screens.md')) {
    @apply box-border h-fit w-[420px] rounded-[20px] border-2 border-outline p-8;
  }
}
</style>
