<script lang="ts" setup>
interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text'
  appearance?: 'default' | 'icon'
}

const props = withDefaults(defineProps<ButtonProps>(), { variant: 'filled', appearance: 'default' })
</script>
<template>
  <button :class="`Button variant-${props.variant} appearance-${props.appearance}`">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.Button {
  @apply inline-flex flex-row items-center justify-center text-center shrink-0 font-roboto text-sm leading-5 tracking-tight rounded-full;

  &:where(.appearance-default) {
    @apply gap-2 px-6 py-2;
  }

  &:where(.appearance-icon) {
    @apply p-2 size-10;
  }

  &:where(.variant-filled) {
    @apply text-primary-foreground bg-primary;

    &:active,
    &:focus {
      @apply bg-primary opacity-90;
    }
    &:disabled {
      @apply bg-primary text-primary-foreground opacity-50;
    }
  }

  &:where(.variant-outlined) {
    @apply text-primary bg-transparent border border-outline;

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
    @apply text-primary bg-transparent;

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
