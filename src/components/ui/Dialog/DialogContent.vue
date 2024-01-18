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
  @apply fixed inset-0 bg-black/50 dark:bg-white/30 z-10;
}

.DialogContent {
  @apply flex flex-col justify-start items-start fixed bg-modal-bg overflow-y-scroll box-border gap-4 p-4 z-20;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: theme('screens.md')) {
    @apply w-full h-[85dvh] bottom-0 rounded-t-3xl;
  }

  @media not (max-width: theme('screens.md')) {
    @apply w-[420px] min-h-40  max-h-[600px] rounded-3xl left-1/2 top-1/2;
    transform: translate(-50%, -50%);
  }

  &::-webkit-scrollbar {
    @apply hidden;
  }
}
</style>
