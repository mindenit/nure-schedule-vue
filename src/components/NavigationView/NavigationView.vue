<script lang="ts" setup generic="T extends Record<string, any>">
import { usePagination } from '@/core/composables'
import { Button } from '../ui/Button'
import { NavigationItem, NavigationRoot } from '../ui/Navigation'
import { DialogClose } from '../ui/Dialog'
import type { ViewProps } from '@/core/types/ui.types'
import { useScheduleStore } from '@/core/stores'

const props = defineProps<ViewProps<T>>()

const { displayedItems, showButton, loadMore } = usePagination(props.data)
const store = useScheduleStore()
</script>
<template>
  <template v-if="!data.length">
    <p class="flex w-full justify-center p-4 animate-fadeIn">
      Елементи за вашим запитом не були знайдені
    </p>
  </template>
  <template v-if="data.length > 0">
    <NavigationRoot>
      <DialogClose v-for="(item, index) in displayedItems" :key="index">
        <NavigationItem
          @click="() => store.addSchedule({ type, name: item[select] })"
          class="animate-fadeIn"
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
