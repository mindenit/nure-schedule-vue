<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
type TextFieldType = 'email' | 'text' | 'password' | 'search'

interface TextFieldProps {
  id: string
  placeholder: string
  type: TextFieldType
  modelValue: string
  error?: string | null
}
const props = defineProps<TextFieldProps>()

const emit = defineEmits(['update:modelValue'])
const model = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div class="flex flex-col relative">
    <input
      class="TextField"
      :type="props.type"
      :id="props.id"
      :placeholder="props.placeholder"
      v-model="model"
    />
    <label
      class="Placeholder"
      :id="props.id"
      :for="props.id"
    >
      <div class="Text bg-transparent text-xl leading-6 font-bold">
        {{ props.placeholder }}
      </div>
    </label>
    <div class="ErrorMessage text-xs font-light" v-if="props.error !== null">{{ error }}</div>
  </div>
</template>

<style lang="scss" scoped>
.Placeholder {
  @apply border-[3px] border-transparent flex items-center absolute top-0 bottom-0 left-0 right-0 bg-transparent pointer-events-none ml-2;
}

.Text {
  @apply text-calendar font-montserrat px-2 py-0;
  transform: translate(0);
  transition:
    transform 0.15s ease-out,
    font-size 0.15s ease-out,
    background-color 0.2s ease-out,
    color 0.15s ease-out;
}

.TextField {
  @apply flex justify-start items-center w-auto bg-app-bg text-contrast border-navbar-chip font-montserrat min-w-52 h-14 rounded-md border-2 border-solid box-border py-2 pr-0 pl-4;

  &:hover,
  &:focus {
    @apply outline-none border-2 border-outline;
  }

  &:focus + .Placeholder .Text {
    @apply bg-app-bg text-outline text-lg;
    transform: translate(0, -170%);
  }

  &:focus + .Placeholder .Text {
    @apply text-contrast font-roboto text-xs leading-4 font-light;
  }

  &:not(&:focus):not(&[value='']) + .Placeholder .Text {
    @apply text-[0px] text-transparent overflow-hidden;
  }
}

.ErrorMessage {
  @apply font-roboto text-error-bg;
}
</style>
