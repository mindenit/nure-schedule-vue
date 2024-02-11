<script lang="ts" setup></script>
<template>
  <div class="LoaderContainer">
    <div class="Spinner"></div>
    <div class="Loader"></div>
  </div>
</template>
<style lang="scss" scoped>
.LoaderContainer {
  @apply fixed bottom-0 left-0 right-0 top-0 z-[999] flex animate-fade-out items-center justify-center bg-app-bg;
}

.Spinner {
  @apply grid size-14 animate-loader-spin rounded-[50%] border-4 border-[#0000] border-r-primary;

  &::before,
  &::after {
    @apply m-0.5 animate-[loader-spin_2s_infinite] rounded-[50%] border-inherit content-[""];
    grid-area: 1/1;
  }

  &::after {
    @apply m-2;
    animation-duration: 3s;
  }
}

.Loader {
  @apply box-content flex h-10 rounded-lg p-[10px] font-poppins text-2xl font-medium text-[#4a4a4a];
}
</style>
