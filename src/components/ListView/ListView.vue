<script lang="ts" setup generic="T extends Record<string, any>">
import { usePagination } from '@/core/composables'
import type { ViewProps } from '@/core/types'
import { Button } from '../ui/Button'
import { ListItem, ListRoot } from '../ui/List'
import { toRefs } from 'vue'

defineEmits<{
  click: [item: T]
}>()

interface Props extends Omit<ViewProps<T>, 'type'> {
  checked: (item: T) => boolean
}

const props = defineProps<Props>()

const { data } = toRefs(props)

const { displayedItems, showButton, loadMore } = usePagination(data)
</script>
<template>
  <template v-if="!data.length">
    <p class="flex w-full animate-fadeIn justify-center p-4">
      Елементи за вашим запитом не були знайдені
    </p>
  </template>
  <template v-if="data.length">
    <ListRoot>
      <ListItem
        v-for="(item, index) in displayedItems"
        :key="index"
        @click="$emit('click', item)"
        class="animate-fadeIn"
        :checked="checked(item)"
      >
        {{ item[select] }}
      </ListItem>
    </ListRoot>
    <div v-if="showButton" class="box-border flex w-full items-center justify-center py-4">
      <Button variant="outlined" type="button" @click="loadMore()">Завантажити ще</Button>
    </div>
  </template>
</template>
