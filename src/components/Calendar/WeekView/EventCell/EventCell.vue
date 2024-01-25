<script lang="ts" setup></script>
<template>
  <div class="ColumnItem"></div>
</template>
<style lang="scss" scoped>
.ColumnItem {
  @apply flex flex-col justify-start items-end w-full border-b border-outline p-2 gap-2 box-border;

  &:nth-child(even) {
    @apply h-5;
  }

  &:nth-child(odd) {
    @apply h-32;
  }

  &:last-child {
    @apply hidden overflow-hidden;
  }
}
</style>
