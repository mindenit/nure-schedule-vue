<script lang="ts" setup>
import Logo from '@/assets/logo.svg'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="LogoContainer">
    <RouterLink :to="{ name: 'home' }">
      <Logo />
    </RouterLink>
    <h2 class="LogoText">
      <slot></slot>
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.LogoContainer {
  @apply flex items-center;

  .LogoText {
    @apply font-montserrat text-3xl font-bold leading-normal text-contrast;
  }
}
</style>
