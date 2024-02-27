<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import NavbarIcon from './NavbarIcon.vue'

withDefaults(defineProps<{ name: string; icon: string; asLink?: boolean }>(), {
  asLink: true
})
</script>
<template>
  <RouterLink v-if="asLink" :to="{ name }" class="NavbarItem">
    <NavbarIcon :icon="icon" />
    <slot></slot>
  </RouterLink>
  <button v-else class="NavbarItem">
    <NavbarIcon :icon="icon" />
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.NavbarItem {
  @apply flex h-full w-full flex-col items-center justify-center gap-2 bg-transparent text-sm font-medium leading-4 text-muted no-underline lg:min-w-16;

  &:hover,
  &:focus {
    @apply text-contrast;

    .IconContainer {
      @apply bg-navbar-chip;
    }
  }

  &:where(.router-link-active) {
    @apply font-semibold text-contrast #{!important};

    .IconContainer {
      @apply bg-navbar-chip;
    }
  }
}
</style>
