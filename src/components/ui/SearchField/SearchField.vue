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
  <div class="SearchFieldContainer">
    <input class="SearchField" type="text" :name="name" v-model="model" />
    <Icon class="Icon" icon="ic:outline-search" />
  </div>
</template>
<style lang="css" scoped>
.SearchFieldContainer {
  @apply flex justify-between items-center w-full p-[15px_15px_15px_20px] bg-secondary-container rounded-3xl;
}
.SearchField {
  @apply text-contrast font-montserrat font-bold text-xl leading-6 w-full tracking-tight border-none outline-none bg-transparent;
}
.Icon {
  @apply size-6 text-emoji;
}
</style>
