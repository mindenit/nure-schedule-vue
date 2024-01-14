<script lang="ts" setup>
import Logo from '@/assets/logo.svg'
</script>
<template>
  <div class="LogoContainer">
    <Logo />
    <h2 class="LogoText">
      <slot></slot>
    </h2>
  </div>
</template>
<style lang="scss" scoped>
.LogoContainer {
  @apply flex items-center gap-2;

  .LogoText {
    @apply text-contrast font-montserrat text-3xl font-bold leading-normal;
  }
}
</style>
