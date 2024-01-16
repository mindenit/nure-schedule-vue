<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import {
  CheckboxRoot,
  CheckboxIndicator,
  useForwardPropsEmits,
  type CheckboxRootEmits,
  type CheckboxRootProps
} from 'radix-vue'

const props = defineProps<CheckboxRootProps>()
const emits = defineEmits<CheckboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <div class="CheckboxContainer">
    <CheckboxRoot class="Checkbox" v-bind="forwarded">
      <CheckboxIndicator>
        <Icon icon="ic:baseline-check" />
      </CheckboxIndicator>
    </CheckboxRoot>
  </div>
</template>
<style lang="scss">
.CheckboxContainer {
  @apply flex items-center justify-center size-10 rounded-2xl bg-transparent;

  &:hover,
  &:has(.Checkbox:focus),
  &:active {
    @apply bg-navbar-chip;
  }

  &:hover {
    @apply opacity-70;
  }

  &:has(.CHeckbox:focus) {
    @apply opacity-15;
  }

  &:active {
    @apply opacity-50;
  }

  &:has(.Checkbox:disabled) {
    @apply cursor-not-allowed;
  }

  .Checkbox {
    @apply flex items-center justify-center size-6 bg-app-bg border-2 border-outline rounded-md;

    svg {
      @apply flex items-center justify-center size-4 text-transparent;
    }

    &:focus {
      @apply outline-none;
    }

    &[data-state='checked'] {
      @apply border-2 border-primary bg-primary;

      svg {
        @apply text-app-bg;
      }

      &[data-disabled] {
        @apply bg-primary border-2 border-primary opacity-70;
      }
    }

    &[data-disabled] {
      @apply pointer-events-none border-2 border-outline opacity-60;
    }
  }
}
</style>
