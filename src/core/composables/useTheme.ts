import { useDark, useToggle } from '@vueuse/core'
import { computed } from 'vue'

export const useTheme = () => {
  const isDark = useDark()
  const icon = computed(() => {
    return !isDark.value ? 'ic:baseline-wb-sunny' : 'ic:baseline-mode-night'
  })

  const toggle = useToggle(isDark)

  return { isDark, icon, toggle }
}
