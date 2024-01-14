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
      class="InputField flex justify-start items-center w-auto"
      :type="props.type"
      :id="props.id"
      :placeholder="props.placeholder"
      v-model="model"
    />
    <label
      class="Placeholder flex items-center absolute top-0 bottom-0 left-0 right-0 bg-transparent pointer-events-none ml-2"
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
  border: 3px solid transparent;
}

.Text {
  @apply text-calendar font-montserrat;
  padding: 0 0.5rem;
  transform: translate(0);
  transition:
    transform 0.15s ease-out,
    font-size 0.15s ease-out,
    background-color 0.2s ease-out,
    color 0.15s ease-out;
}

.InputField {
  @apply bg-app-bg text-contrast border-navbar-chip font-montserrat;
  min-width: 210px;
  height: 56px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;

  padding: 8px 0px 8px 16px;
  box-sizing: border-box;

  &:hover,
  &:focus {
    outline: none;
    border-width: 2px;
    border-style: solid;
    @apply border-outline;
  }

  &:focus + .Placeholder .Text {
    @apply bg-app-bg text-outline;
    font-size: 1.1rem;
    transform: translate(0, -170%);
  }

  &:focus + .Placeholder .Text {
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    @apply text-contrast font-roboto;
  }

  &:not(&:focus):not(&[value='']) + .Placeholder .Text {
    overflow: hidden;
    font-size: 0;
    color: transparent;
  }
}

.ErrorMessage {
  @apply font-roboto text-error-bg;
}
</style>
