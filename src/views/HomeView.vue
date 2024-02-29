<script setup lang="ts">
import { Calendar } from '@/components/Calendar'
import { useSchedulesStore } from '@/core/stores'
import { MainLayout } from '@/layouts/MainLayout'
import { Icon } from '@iconify/vue'
import { Title } from '@/components/ui/Title'
import { ScheduleDialog } from '@/components/ScheduleDialog'
import { toRefs } from 'vue'
import { useHead, useSeoMeta } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

const schedulesStore = useSchedulesStore()

const { activeSchedule } = toRefs(schedulesStore)

const title = 'Головна'
const description =
  'Переглядайте розклад у максимально зручній формі, користуючись одним із трьох режимів показу. А також додавайте розклад інших груп та викладачів у свій список розкладів.'

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
</script>

<template>
  <MainLayout title="Розклад">
    <section class="HomeView">
      <div v-if="!activeSchedule" class="NoScheduleFallback">
        <Icon icon="ic:baseline-sentiment-slightly-dissatisfied" class="size-24" />
        <Title variant="large" class="max-sm:text-center">У вас поки немає розкладів</Title>
        <ScheduleDialog />
      </div>
      <Calendar v-else />
    </section>
  </MainLayout>
</template>
<style lang="scss" scoped>
.HomeView {
  @apply box-border flex h-full flex-col gap-5 p-5;
}

.NoScheduleFallback {
  @apply flex size-full flex-col items-center justify-center gap-4;
}
</style>
