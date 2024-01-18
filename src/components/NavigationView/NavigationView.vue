<script lang="ts" setup generic="T extends Record<string, any>">
import { usePagination } from '@/core/composables'
import { Button } from '../ui/Button'
import { NavigationItem, NavigationRoot } from '../ui/Navigation'
import { DialogClose } from '../ui/Dialog'

interface Props {
  // TODO: Fix issue with types
  data: T[]
  select: 'name' | 'shortName'
  type: string
}

defineEmits<{
  click: [item: T]
}>()

const props = defineProps<Props>()

const { displayedItems, showButton, loadMore } = usePagination(props.data)
</script>
<template>
  <template v-if="!data.length">
    <p class="flex w-full justify-center p-4">Елементи за вашим запитом не були знайдені</p>
  </template>
  <template v-if="data.length > 0">
    <NavigationRoot>
      <DialogClose v-for="(item, index) in displayedItems" :key="index">
        <NavigationItem
          :to="{
            name: 'home',
            query: { type, name: item[select] }
          }"
          @click="$emit('click', item)"
        >
          {{ item[select] }}
        </NavigationItem>
      </DialogClose>
    </NavigationRoot>
    <div v-if="showButton" class="flex items-center justify-center w-full py-4 box-border">
      <Button variant="outlined" type="button" @click="loadMore()">Завантажити ще</Button>
    </div>
  </template>
</template>
