import { toRef, type MaybeRef, computed } from 'vue'

export const usePasswordCheckers = (value: MaybeRef<string>) => {
  const password = toRef(value)

  const lengthChecker = computed(() => {
    return password.value.length >= 6
  })

  const digitChecker = computed(() => {
    return /(.*\d.*)/.test(password.value)
  })

  const specialSymbolChecker = computed(() => {
    return /(.*\W.*)/.test(password.value)
  })

  const upperCaseChecker = computed(() => {
    return /(.*[A-Z].*)/.test(password.value)
  })

  const isValid = computed(() => {
    return (
      lengthChecker.value &&
      digitChecker.value &&
      specialSymbolChecker.value &&
      upperCaseChecker.value
    )
  })

  return {
    lengthChecker,
    digitChecker,
    specialSymbolChecker,
    upperCaseChecker,
    isValid
  }
}
