<script lang="ts" setup></script>
<template>
  <div class="LoaderContainer">
    <div class="Spinner"></div>
    <div class="Loader"></div>
  </div>
</template>
<style lang="scss" scoped>
.LoaderContainer {
  @apply bg-app-bg animate-fade-out fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999];
}

.Spinner {
  @apply border-r-primary animate-loader-spin grid size-14 border-4 border-[#0000] rounded-[50%];

  &::before,
  &::after {
    @apply content-[""] m-0.5 border-inherit rounded-[50%] animate-[loader-spin_2s_infinite]
    grid-area: 1/1;
  }

  &::after {
    @apply m-2
    animation-duration: 3s;
  }
}

.Loader {
  @apply font-poppins text-[#4a4a4a] font-medium text-2xl box-content h-10 p-[10px] flex rounded-lg;
}
</style>
