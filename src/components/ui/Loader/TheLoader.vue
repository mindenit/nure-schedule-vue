<script lang="ts" setup></script>
<template>
  <div
    class="LoaderContainer fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[999]"
  >
    <div
      class="Spinner grid w-[56px] h-[56px] border-4 border-solid border-[#0000] rounded-[50%]"
    ></div>
    <div class="Loader font-medium text-[25px] box-content h-[40px] p-[10px] flex rounded-lg"></div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes fadeOut {
  0% {
    opacity: 1;
    height: 100%;
  }
  100% {
    opacity: 0;
    height: 0;
  }
}

@keyframes spin {
  100% {
    transform: rotate(1turn);
  }
}
.LoaderContainer {
  @apply bg-app-bg;
  animation: fadeOut;
}

.Spinner {
  @apply border-r-primary;
  animation: spin 1s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: spin 2s infinite;
  }

  &::after {
    margin: 8px;
    animation-duration: 3s;
  }
}

.Loader {
  color: #4a4a4a;
  font-family: 'Poppins', sans-serif;
}
</style>
