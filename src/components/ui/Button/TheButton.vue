<script lang="ts" setup>
interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text'
  appearance?: 'default' | 'icon'
}

withDefaults(defineProps<ButtonProps>(), { variant: 'filled', appearance: 'default' })
</script>
<template>
  <button :class="[`Button`, `variant-${variant}`, `appearance-${appearance}`, $attrs['class']]">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.Button {
  @apply inline-flex shrink-0 flex-row items-center justify-center rounded-full text-center font-roboto text-sm leading-5 tracking-tight;

  &:where(.appearance-default) {
    @apply gap-2 px-6 py-2;
  }

  &:where(.appearance-icon) {
    @apply size-10 p-2;
  }

  &:where(.variant-filled) {
    @apply bg-primary text-primary-foreground;

    &:active,
    &:focus {
      @apply bg-primary opacity-90;
    }
    &:disabled {
      @apply bg-primary text-primary-foreground opacity-50;
    }
  }

  &:where(.variant-outlined) {
    @apply border border-outline bg-transparent text-primary;

    &:hover,
    &:focus {
      @apply border-primary;
    }

    &:hover {
      @apply bg-surface-container;
    }

    &:disabled {
      @apply bg-primary text-primary-foreground opacity-20;
    }
  }

  &:where(.variant-text) {
    @apply bg-transparent text-primary;

    &:hover,
    &:focus,
    &:active {
      @apply bg-surface-container;
    }

    &:disabled {
      @apply bg-primary text-primary-foreground opacity-20;
    }
  }
}
</style>
