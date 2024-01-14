<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import NavbarIcon from './NavbarIcon.vue'

const props = withDefaults(defineProps<{ name: string; icon: string; isActive?: boolean }>(), {
  isActive: false
})

const activeClass = computed(() => {
  return props.isActive ? 'active' : ''
})
</script>
<template>
  <RouterLink :to="{ name }" :class="`NavbarItem ${activeClass}`">
    <NavbarIcon :icon="icon" />
    <slot></slot>
  </RouterLink>
</template>
<style lang="scss" scoped>
.NavbarItem {
  @apply flex flex-col items-center justify-center w-full h-full lg:min-w-16 gap-2 text-sm font-medium no-underline leading-4 bg-transparent text-muted;

  &:hover,
  &:focus {
    @apply text-contrast;

    .IconContainer {
      @apply bg-navbar-chip;
    }
  }

  &:where(.active) {
    @apply text-contrast font-semibold #{!important};

    .IconContainer {
      @apply bg-navbar-chip;
    }
  }
}
</style>
