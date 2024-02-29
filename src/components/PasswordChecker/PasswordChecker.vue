<script lang="ts" setup>
import { usePasswordCheckers } from '@/core/composables'
import { Icon } from '@iconify/vue'
import { toRefs, type Ref } from 'vue'
import { Title } from '../ui/Title'

const props = defineProps<{ password: string }>()

const { password } = toRefs(props)

const checkers = usePasswordCheckers(password)

const getIcon = (condition: Ref<boolean>) => {
  return condition.value ? 'ic:baseline-check' : 'ic:baseline-close'
}

console.log(checkers.lengthChecker.value)
</script>
<template>
  <div class="PasswordChecker">
    <Title variant="medium">Пароль має містити: </Title>
    <ul class="Container">
      <li
        :class="[
          {
            'success line-through': checkers.lengthChecker.value,
            wrong: !checkers.lengthChecker.value
          },
          'Checker'
        ]"
      >
        <Icon :icon="getIcon(checkers.lengthChecker)" />
        Щонайменше 6 символів
      </li>
      <li
        :class="[
          {
            'success line-through': checkers.digitChecker.value,
            wrong: !checkers.digitChecker.value
          },
          'Checker'
        ]"
      >
        <Icon :icon="getIcon(checkers.digitChecker)" />
        Принаймні одну цифру
      </li>
      <li
        :class="[
          {
            'success line-through': checkers.upperCaseChecker.value,
            wrong: !checkers.upperCaseChecker.value
          },
          'Checker'
        ]"
      >
        <Icon :icon="getIcon(checkers.upperCaseChecker)" />
        Принаймні одну велику літеру
      </li>
      <li
        :class="[
          {
            'success line-through': checkers.specialSymbolChecker.value,
            wrong: !checkers.specialSymbolChecker.value
          },
          'Checker'
        ]"
      >
        <Icon :icon="getIcon(checkers.specialSymbolChecker)" />
        Спеціальний символ
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.PasswordChecker {
  @apply box-border flex h-fit w-full flex-col gap-3 rounded-lg bg-surface-container p-4;
}

.Icon {
  @apply flex size-5;

  &:where(.wrong) {
    @apply text-error-bg;
  }

  &:where(.success) {
    @apply text-lime-500;
  }
}

.Container {
  @apply flex w-full flex-col gap-1;
}

.Checker {
  @apply flex w-full flex-row items-center justify-start gap-2 font-roboto text-xs font-light text-muted;

  svg {
    @apply size-5;
  }

  &:where(.wrong) {
    svg {
      @apply text-error-bg;
    }
  }

  &:where(.success) {
    svg {
      @apply text-lime-500;
    }
  }

  &:where(.completed) {
    @apply line-through;
  }
}
</style>
