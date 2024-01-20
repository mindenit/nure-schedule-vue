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
  @apply flex flex-col justify-center items-center w-full h-dvh;
}
.LayoutContainer {
  @apply flex flex-col justify-center items-center bg-transparent gap-5;

  @media (min-width: theme('screens.md')) {
    @apply border-2 border-outline w-[420px] h-fit rounded-[20px] p-8 box-border;
  }
}
</style>
