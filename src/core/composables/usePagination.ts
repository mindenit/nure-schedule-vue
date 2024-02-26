import { ITEMS_PER_PAGE } from '@/core/constants'
import { computed, ref, type Ref } from 'vue'

export function usePagination<T>(items: Ref<T[]>) {
  const currentPage = ref(1)

  const startIndex = computed(() => {
    return (currentPage.value - 1) * ITEMS_PER_PAGE
  })
  const endIndex = computed(() => {
    return startIndex.value + ITEMS_PER_PAGE
  })
  const displayedItems = computed(() => {
    return items.value.slice(0, endIndex.value)
  })

  const totalItems = computed(() => items.value.length)
  const totalPages = computed(() => Math.ceil(totalItems.value / ITEMS_PER_PAGE))
  const showButton = computed(() => currentPage.value < totalPages.value)

  const loadMore = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  return { displayedItems, loadMore, showButton }
}
