<script lang="ts" setup>
import { useDataQueries } from '@/core/composables'
import { search } from '@/core/utils'
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { ListView } from '../ListView'
import { Button } from '../ui/Button'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '../ui/Dialog'
import { SearchField } from '../ui/SearchField'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../ui/Tabs'
import { LESSONS_TYPE } from '@/core/constants'
import { useFiltersStore } from '@/core/stores'
import { storeToRefs } from 'pinia'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const result = useDataQueries()
const searchValue = ref('')
const selectedTab = ref('teachers')

const filtersStore = useFiltersStore()

const { lessonsFilter, auditoriumsFilter, teachersFilter } = storeToRefs(filtersStore)

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})
</script>
<template>
  <DialogRoot>
    <DialogTrigger>
      <Button v-if="deviceClass === 'is-desktop'">
        Додати фільтр
        <Icon icon="ic:add" />
      </Button>
      <Button v-else appearance="icon">
        <Icon icon="ic:add" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Фільтри</DialogHeader>
      <SearchField name="search" inputmode="text" placeholder="Пошук..." v-model="searchValue" />
      <TabsRoot class="flex w-full flex-col gap-4" v-model="selectedTab">
        <TabsList>
          <TabsTrigger value="teachers"> Викладачі </TabsTrigger>
          <TabsTrigger value="auditoriums"> Авдиторії </TabsTrigger>
          <TabsTrigger value="lessons"> Тип пари </TabsTrigger>
        </TabsList>
        <TabsContent value="teachers">
          <p
            v-if="result[1].isLoading"
            class="box-border flex w-full items-center justify-center py-4"
          >
            Завантаження...
          </p>
          <ListView
            v-else-if="result[1].data"
            :data="search(result[1].data, searchValue, 'shortName')"
            select="shortName"
            @click="(item) => filtersStore.addTeachersFilter(item)"
            :checked="(item) => teachersFilter.includes(item)"
          />
        </TabsContent>
        <TabsContent value="auditoriums">
          <p
            v-if="result[2].isLoading"
            class="box-border flex w-full items-center justify-center py-4"
          >
            Завантаження...
          </p>
          <ListView
            v-else-if="result[2].data"
            :data="search(result[2].data, searchValue, 'name')"
            select="name"
            @click="(item) => filtersStore.addAuditoriumFilter(item)"
            :checked="(item) => auditoriumsFilter.includes(item)"
          />
        </TabsContent>
        <TabsContent value="lessons">
          <ListView
            :data="search(LESSONS_TYPE, searchValue, 'name')"
            select="name"
            @click="(item) => filtersStore.addLessonsFilter(item)"
            :checked="(item) => lessonsFilter.includes(item)"
          />
        </TabsContent>
      </TabsRoot>
    </DialogContent>
  </DialogRoot>
</template>
