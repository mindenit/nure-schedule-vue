<script lang="ts" setup></script>
<template>
  <section class="ListRoot">
    <slot></slot>
  </section>
</template>
<style lang="css" scoped>
.ListRoot {
  @apply flex flex-col items-start justify-start w-full;
}
</style>
