<script lang="ts" setup generic="T extends Record<string, any>">
import { usePagination } from '@/core/composables'
import type { ViewProps } from '@/core/types/ui.types'
import { Button } from '../ui/Button'
import { ListItem, ListRoot } from '../ui/List'

defineEmits<{
  click: [item: T]
}>()

const props = defineProps<ViewProps<T>>()

const { displayedItems, showButton, loadMore } = usePagination(props.data)
</script>
<template>
  <template v-if="!data.length">
    <p class="flex w-full justify-center p-4 animate-fadeIn">
      Елементи за вашим запитом не були знайдені
    </p>
  </template>
  <template v-if="data.length > 0">
    <ListRoot>
      <ListItem
        v-for="(item, index) in displayedItems"
        :key="index"
        :to="{
          name: 'home',
          query: { type, name: item[select] }
        }"
        @click="$emit('click', item)"
        class="animate-fadeIn"
      >
        {{ item[select] }}
      </ListItem>
    </ListRoot>
    <div v-if="showButton" class="flex items-center justify-center w-full py-4 box-border">
      <Button variant="outlined" type="button" @click="loadMore()">Завантажити ще</Button>
    </div>
  </template>
</template>
