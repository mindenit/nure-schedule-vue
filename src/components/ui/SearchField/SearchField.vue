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
    <input
      v-bind="$attrs"
      class="SearchField"
      type="text"
      :name="name"
      v-model="model"
      autocomplete="off"
    />
    <Icon class="Icon" icon="ic:outline-search" />
  </div>
</template>
<style lang="css" scoped>
.SearchFieldContainer {
  @apply flex w-full items-center justify-between rounded-3xl bg-secondary-container p-[15px_15px_15px_20px];
}
.SearchField {
  @apply w-full border-none bg-transparent font-montserrat text-xl font-bold leading-6 tracking-tight text-contrast outline-none;
}
.Icon {
  @apply size-6 text-emoji;
}
</style>
