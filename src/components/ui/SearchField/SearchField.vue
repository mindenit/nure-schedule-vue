<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  modelValue: string
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>
<template>
  <div class="Container flex justify-between items-center w-full p-[15px_15px_15px_20px]">
    <input
      class="InputField font-bold text-xl leading-6 w-full tracking-tight border-none outline-none bg-transparent"
      type="text"
      :name="props.name"
      v-model="model"
    />
    <Icon class="Icon w-6 h-6" icon="ic:outline-search" />
  </div>
</template>
<style lang="css" scoped>
.Container {
  @apply bg-secondary-container rounded-3xl;
}
.InputField {
  @apply text-contrast font-montserrat;
}
.Icon {
  @apply text-emoji;
}
</style>
