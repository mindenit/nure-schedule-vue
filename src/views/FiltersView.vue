<script lang="ts" setup>
import { FiltersDialog } from '@/components/FiltersDialog'
import { InfoCard } from '@/components/ui/Card'
import { Title } from '@/components/ui/Title'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'
import { useFiltersStore } from '@/core/stores'
import { MainLayout } from '@/layouts/MainLayout'
import { useHead, useSeoMeta } from '@unhead/vue'
import { storeToRefs } from 'pinia'

const title = 'Фільтри'
const description =
  'Оберіть які елементи розкладу ви хочете бачити, видаляючи непотрібні аудиторії, викладачів, або типи занятть.'

useHead({
  title: title,
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

const filtersStore = useFiltersStore()

const { auditoriumsFilter, lessonsFilter, teachersFilter } = storeToRefs(filtersStore)

// TODO: replace any type to something more reliable
const filters = [
  {
    name: 'Викладачі',
    items: teachersFilter.value,
    callback: (teacher: any) => teacher.fullName
  },
  {
    name: 'Авдиторії',
    items: auditoriumsFilter.value,
    callback: (auditorium: any) => auditorium.name
  },
  {
    name: 'Тип пар',
    items: lessonsFilter.value,
    callback: (lesson: any) => lesson.name
  }
]

// TODO: replace any type to something more reliable
const handleClick = (item: any, name: string) => {
  if (name === 'Викладачі') {
    filtersStore.removeTeacherFilter(item)
  }

  if (name === 'Авдиторії') {
    filtersStore.removeAuditoriumFilter(item)
  }

  if (name === 'Тип пар') {
    filtersStore.removeLessonFilter(item)
  }
}
</script>
<template>
  <MainLayout title="Фільтри">
    <section class="FiltersPage">
      <header class="PageHeader">
        <div class="flex flex-col">
          <Title variant="large" class="md:hidden">Фільтри</Title>
          <Title variant="medium">Оберіть елементи, які не треба показувати</Title>
        </div>
        <div class="MobileButtonContainer">
          <FiltersDialog />
        </div>
      </header>
      <div class="PageBody">
        <template v-for="(filter, index) in filters" :key="index">
          <div v-if="filter.items.length" class="ContentWrapper">
            <Title variant="big"> {{ filter.name }}: </Title>
            <div class="ContentContainer">
              <InfoCard
                v-for="(item, index) in filter.items"
                :key="index"
                :title="filter.callback(item)"
                @click="handleClick(item, filter.name)"
              />
            </div>
          </div>
        </template>
      </div>
    </section>
  </MainLayout>
</template>
<style lang="scss" scoped>
.FiltersPage {
  @apply mx-auto my-0 box-border flex h-fit w-full flex-col items-start justify-start gap-4 px-16 py-6;
}

.PageHeader {
  @apply box-border flex h-fit w-full flex-row items-center justify-between;
}

.PageBody {
  @apply flex h-fit w-full flex-col items-start justify-start gap-4;
}

.ContentWrapper {
  @apply flex h-fit w-full flex-col items-start justify-start gap-4;
}

.ContentContainer {
  @apply flex h-fit w-full flex-row flex-wrap items-start justify-start gap-4;
}
</style>
