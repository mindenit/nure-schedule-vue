<script lang="ts" setup generic="T extends Record<string, any>">
import { usePagination } from '@/core/composables'
import { Button } from '../ui/Button'
import { NavigationItem, NavigationRoot } from '../ui/Navigation'
import { DialogClose } from '../ui/Dialog'
import type { ViewProps } from '@/core/types'
import { useSchedulesStore } from '@/core/stores'
import { toRefs } from 'vue'

const props = defineProps<ViewProps<T>>()

const { data } = toRefs(props)

const { displayedItems, showButton, loadMore } = usePagination(data)
const store = useSchedulesStore()
</script>
<template>
  <template v-if="!data.length">
    <p class="flex w-full animate-fadeIn justify-center p-4">
      Елементи за вашим запитом не були знайдені
    </p>
  </template>
  <template v-if="data.length > 0">
    <NavigationRoot>
      <DialogClose v-for="(item, index) in displayedItems" :key="index">
        <NavigationItem
          @click="() => store.addSchedule({ type, name: item[select], id: item.id })"
          class="animate-fadeIn"
        >
          {{ item[select] }}
        </NavigationItem>
      </DialogClose>
    </NavigationRoot>
    <div v-if="showButton" class="box-border flex w-full items-center justify-center py-4">
      <Button variant="outlined" type="button" @click="loadMore()">Завантажити ще</Button>
    </div>
  </template>
</template>
