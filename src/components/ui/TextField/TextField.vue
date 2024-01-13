<script lang="ts" setup>
type TextFieldType = 'email' | 'text' | 'password' | 'search'

interface TextFieldProps {
  id: string
  placeholder: string
  type: TextFieldType
  error?: string | null
}

const props = defineProps<TextFieldProps>()
</script>

<template>
  <div class="Container">
    <input :type="props.type" :id="props.id" :placeholder="props.placeholder" />
    <label class="Placeholder" :id="props.id" :for="props.id">
      <div class="Text">{{ props.placeholder }}</div>
    </label>
    <div class="ErrorMessage" v-if="props.error !== null">{{ error }}</div>
  </div>
</template>

<style lang="css" scoped>
.Container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.Placeholder {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 3px solid transparent;
  background-color: transparent;
  pointer-events: none;
  margin-left: 8px;
}

.Text {
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  padding: 0 0.5rem;
  background-color: transparent;
  transform: translate(0);
  @apply text-calendar;
  transition:
    transform 0.15s ease-out,
    font-size 0.15s ease-out,
    background-color 0.2s ease-out,
    color 0.15s ease-out;
}

input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  min-width: 210px;
  height: 56px;
  @apply bg-app-bg;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  @apply text-contrast;
  line-height: 24px;
  border-radius: 4px;
  border-width: 2px;
  boder-style: solid;
  @apply border-navbar-chip;

  padding: 8px 0px 8px 16px;
  box-sizing: border-box;
}

input:hover,
input:focus {
  outline: none;
  border-width: 2px;
  boder-style: solid;
  @apply border-outline;
}

input:focus + .Placeholder .Text {
  @apply bg-app-bg;
  font-size: 1.1rem;
  @apply text-outline;
  transform: translate(0, -170%);
}

input:focus + .Placeholder .Text {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  @apply text-contrast;
}

input:not(input:focus):not(input[value='']) + .Placeholder .Text {
  overflow: hidden;
  font-size: 0;
  color: transparent;
}
</style>
