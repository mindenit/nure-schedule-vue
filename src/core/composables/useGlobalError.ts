import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useGlobalError = createGlobalState(() => ({
  isGlobalError: ref(false)
}))
