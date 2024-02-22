<script lang="ts" setup>
interface Props {
  variant?: 'light' | 'medium' | 'big' | 'large'
}

const props = withDefaults(defineProps<Props>(), { variant: 'medium' })
</script>

<template>
  <h5 class="LightTitle" v-if="props.variant === 'light'">
    <slot></slot>
  </h5>
  <h4 class="MediumTitle" v-if="props.variant === 'medium'">
    <slot></slot>
  </h4>
  <h3 class="BigTitle" v-if="props.variant === 'big'">
    <slot></slot>
  </h3>
  <h2 class="LargeTitle" v-if="props.variant === 'large'">
    <slot></slot>
  </h2>
</template>

<style lang="css" scoped>
.LightTitle {
  @apply Muted font-roboto text-xs font-light;
}
.MediumTitle {
  @apply Muted font-montserrat text-sm font-medium leading-[18px] tracking-[0.009rem];
}
.BigTitle {
  @apply Contrast font-montserrat text-xl font-bold leading-6 tracking-wide max-sm:text-lg;
}
.LargeTitle {
  @apply Contrast mb-[10px] font-montserrat text-[32px] font-extrabold leading-10;
}
.Muted {
  @apply text-muted;
}
.Contrast {
  @apply text-contrast;
}
</style>
