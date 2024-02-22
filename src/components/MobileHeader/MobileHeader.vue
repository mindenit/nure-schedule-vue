<script lang="ts" setup>
import { Logo } from '../ui/Logo'
import { useTheme } from '@/core/composables'
import { Button } from '../ui/Button'
import { Icon } from '@iconify/vue'

defineProps<{ title: string }>()

const { icon, toggle } = useTheme()
</script>
<template>
  <header class="MobileHeader">
    <Logo>{{ title }}</Logo>
    <Button variant="text" @click="toggle()">
      <Icon :icon="icon" />
    </Button>
  </header>
</template>
<style lang="scss" scoped>
.MobileHeader {
  @apply mb-2 mt-4 box-border flex flex-row justify-between px-4 md:hidden md:overflow-hidden;
}
</style>
