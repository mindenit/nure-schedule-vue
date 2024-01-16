<script lang="ts" setup>
interface Props {
  variant?: 'light' | 'medium' | 'big' | 'large'
}

const props = withDefaults(defineProps<Props>(), { variant: 'medium' })
</script>

<template>
  <h5 class="font-roboto Muted text-xs font-light" v-if="props.variant === 'light'">
    <slot></slot>
  </h5>
  <h4
    class="font-montserrat Muted text-sm leading-[18px] font-medium tracking-[0.009rem]"
    v-if="props.variant === 'medium'"
  >
    <slot></slot>
  </h4>
  <h3
    class="font-montserrat text-xl leading-[24px] tracking-wide font-bold Contrast"
    v-if="props.variant === 'big'"
  >
    <slot></slot>
  </h3>
  <h2
    class="font-montserrat text-[32px] leading-10 font-extrabold Contrast mb-[10px]"
    v-if="props.variant === 'large'"
  >
    <slot></slot>
  </h2>
</template>

<style lang="css" scoped>
.Muted {
  @apply text-muted;
}
.Contrast {
  @apply text-contrast;
}
</style>
