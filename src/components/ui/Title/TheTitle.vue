<script lang="ts" setup>
// TODO: Rewrite component

interface Props {
  variant?: 'light' | 'medium' | 'big' | 'large' | 'xl'
}

withDefaults(defineProps<Props>(), { variant: 'medium' })
</script>

<template>
  <h5 :class="['LightTitle', $attrs['class']]" v-if="variant === 'light'">
    <slot></slot>
  </h5>
  <h4 :class="['MediumTitle', $attrs['class']]" v-if="variant === 'medium'">
    <slot></slot>
  </h4>
  <h3 :class="['BigTitle', $attrs['class']]" v-if="variant === 'big'">
    <slot></slot>
  </h3>
  <h2 :class="['LargeTitle', $attrs['class']]" v-if="variant === 'large'">
    <slot></slot>
  </h2>
  <h1 :class="['ExtraLargeTitle', $attrs['class']]" v-if="variant === 'xl'">
    <slot></slot>
  </h1>
</template>

<style lang="css" scoped>
.LightTitle {
  @apply Muted select-none font-roboto text-xs font-light;
}
.MediumTitle {
  @apply Muted select-none text-wrap font-montserrat text-sm font-medium leading-[18px] tracking-[0.009rem];
}
.BigTitle {
  @apply Contrast select-none font-montserrat text-xl font-bold leading-6 tracking-wide max-sm:text-lg;
}
.LargeTitle {
  @apply Contrast mb-[10px] select-none font-montserrat text-[32px] font-extrabold leading-10;
}

.ExtraLargeTitle {
  @apply Contrast mb-[10px] select-none font-montserrat text-5xl font-extrabold leading-10;
}
.Muted {
  @apply text-muted;
}
.Contrast {
  @apply text-contrast;
}
</style>
