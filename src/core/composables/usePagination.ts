import { ITEMS_PER_PAGE } from '@/core/constants'
import { computed, ref } from 'vue'

export function usePagination<T>(items: T[]) {
  const currentPage = ref(1)

  const startIndex = computed(() => {
    return (currentPage.value - 1) * ITEMS_PER_PAGE
  })
  const endIndex = computed(() => {
    return startIndex.value + ITEMS_PER_PAGE
  })
  const displayedItems = computed(() => {
    return items.slice(0, endIndex.value)
  })

  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
  const showButton = computed(() => currentPage.value < totalPages)

  const loadMore = () => {
    if (currentPage.value < totalPages) {
      currentPage.value++
    }
  }

  return { displayedItems, loadMore, showButton }
}
