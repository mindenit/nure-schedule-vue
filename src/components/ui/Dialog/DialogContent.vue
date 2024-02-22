<script lang="ts" setup>
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
  type DialogContentEmits,
  type DialogContentProps
} from 'radix-vue'

const props = defineProps<DialogContentProps>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <DialogPortal>
    <DialogOverlay class="DialogOverlay" />
    <DialogContent v-bind="forwarded" class="DialogContent">
      <slot></slot>
    </DialogContent>
  </DialogPortal>
</template>
<style lang="scss" scoped>
.DialogOverlay {
  @apply fixed inset-0 z-10 bg-black/50 dark:bg-white/30;
}

.DialogContent {
  @apply fixed z-20 box-border flex flex-col items-start justify-start gap-4 overflow-y-scroll bg-modal-bg p-4;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: theme('screens.md')) {
    @apply bottom-0 max-h-[90dvh] w-full rounded-t-3xl;
  }

  @media not (max-width: theme('screens.md')) {
    @apply left-1/2 top-1/2  max-h-[600px] min-h-40 w-[420px] rounded-3xl;
    transform: translate(-50%, -50%);
  }

  &::-webkit-scrollbar {
    @apply hidden;
  }
}

.DialogOverlay[data-state='open'],
.DialogContent[data-state='open'] {
  @apply animate-fadeIn;
}

.DialogOverlay[data-state='closed'],
.DialogContent[data-state='closed'] {
  @apply animate-fadeOut;
}
</style>
