<script lang="ts" setup>
import { Icon } from '@iconify/vue'

interface Props {
  name: string
}
const props = defineProps<Props>()
</script>
<template>
  <div class="Container flex justify-between items-center w-full">
    <input
      class="font-bold text-xl leading-6 w-full tracking-tight border-none outline-none"
      type="text"
      :name="props.name"
    />
    <Icon class="Icon" icon="ic:outline-search" />
  </div>
</template>
<style lang="css" scoped>
.Container {
  @apply bg-secondary-container;
  border-radius: 28px;
  padding: 15px 15px 15px 20px;
}
input {
  font-family: 'Montserrat', sans-serif;
  background-color: transparent;
  @apply text-contrast;
}
.Icon {
  @apply text-emoji;
  height: 24px;
  width: 24px;
}
</style>
