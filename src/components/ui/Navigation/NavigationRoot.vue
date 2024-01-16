<script lang="ts" setup></script>
<template>
  <section class="NavigationRoot"><slot></slot></section>
</template>
<style lang="css" scoped>
.NavigationRoot {
  @apply flex flex-col items-start justify-start w-full h-fit gap-2;
}
</style>
