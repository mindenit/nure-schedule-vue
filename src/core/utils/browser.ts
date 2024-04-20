import { nextTick } from 'vue'

export const horizontalScrollTo = (
  elementId: string,
  options: Omit<ScrollIntoViewOptions, 'inline' | 'block'> = { behavior: 'smooth' }
) => {
  document.getElementById(elementId)?.scrollIntoView({ ...options, inline: 'center' })

  nextTick(() => {
    document.getElementById(elementId)?.scrollBy({ top: 0 })
  })
}
