import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark()
  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
}
