<script lang="ts" setup>
import { useDataQueries } from '@/core/composables'
import { ref } from 'vue'
import { DialogContent, DialogHeader, DialogRoot, DialogTrigger } from '../ui/Dialog'
import { Button } from '../ui/Button'
import { Icon } from '@iconify/vue'
import { SearchField } from '../ui/SearchField'
import { TabsContent, TabsRoot, TabsList, TabsTrigger } from '../ui/Tabs'
import { DIALOG_TABS } from '@/core/constants'
import { search } from '@/core/utils'
import { ListView } from '../ListView'

const result = useDataQueries()
const searchValue = ref('')
const selectedTab = ref('groups')
</script>
<template>
  <DialogRoot>
    <DialogTrigger>
      <Button>
        Додати фільтр
        <Icon icon="ic:add" />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Фільтри</DialogHeader>
      <SearchField name="search" inputmode="text" placeholder="Пошук..." v-model="searchValue" />
      <TabsRoot class="flex w-full flex-col gap-4" v-model="selectedTab">
        <TabsList>
          <TabsTrigger v-for="(tab, index) in DIALOG_TABS" :key="index" :value="tab.value">
            {{ tab.fallback }}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          v-for="(query, index) in result"
          :key="index"
          :value="DIALOG_TABS[index].value"
        >
          <p
            v-if="query.isLoading"
            class="box-border flex w-full items-center justify-center py-4"
            v-auto-animate
          >
            Завантаження...
          </p>
          <ListView
            v-else-if="query.data"
            :data="search(query.data, searchValue, DIALOG_TABS[index].select)"
            :select="DIALOG_TABS[index].select"
            :type="DIALOG_TABS[index].value"
          />
        </TabsContent>
      </TabsRoot>
    </DialogContent>
  </DialogRoot>
</template>
