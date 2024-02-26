<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
type TextFieldType = 'email' | 'text' | 'password' | 'search'

interface TextFieldProps {
  id: string
  placeholder: string
  type: TextFieldType
  modelValue: string
  error?: string
}
const props = defineProps<TextFieldProps>()

const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div class="relative flex flex-col">
    <input
      class="TextField"
      v-bind="$attrs"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      v-model="model"
    />
    <label class="Placeholder" :id="id" :for="id">
      <div class="Text">
        {{ placeholder }}
      </div>
    </label>
    <div class="ErrorMessage" v-if="error !== null">{{ error }}</div>
  </div>
</template>

<style lang="scss" scoped>
.Placeholder {
  @apply pointer-events-none absolute bottom-0 left-0 right-0 top-0 ml-2 flex items-center border-[3px] border-transparent bg-transparent;
}

.Text {
  @apply bg-transparent px-2 py-0 font-montserrat text-xl font-bold leading-6 text-calendar;
  transform: translate(0);
  transition:
    transform 0.15s ease-out,
    font-size 0.15s ease-out,
    background-color 0.2s ease-out,
    color 0.15s ease-out;
}

.TextField {
  @apply box-border flex h-14 w-auto min-w-52 items-center justify-start rounded-md border-2 border-solid border-navbar-chip bg-app-bg py-2 pl-4 pr-0 font-montserrat text-contrast;

  &:hover,
  &:focus {
    @apply border-2 border-outline outline-none;
  }

  &:focus + .Placeholder .Text {
    @apply bg-app-bg text-lg text-outline;
    transform: translate(0, -170%);
  }

  &:focus + .Placeholder .Text {
    @apply font-roboto text-xs font-light leading-4 text-contrast;
  }

  &:not(&:focus):not(&[value='']) + .Placeholder .Text {
    @apply overflow-hidden text-[0px] text-transparent;
  }
}

.ErrorMessage {
  @apply font-roboto text-xs font-light text-error-bg;
}
</style>
@/core/types/validation
