<script setup lang="ts">
import { Calendar } from '@/components/Calendar'
import { useSchedulesStore } from '@/core/stores'
import { MainLayout } from '@/layouts/MainLayout'
import { Icon } from '@iconify/vue'
import { Title } from '@/components/ui/Title'
import { ScheduleDialog } from '@/components/ScheduleDialog'
import { toRefs } from 'vue'
import { useHead } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

const schedulesStore = useSchedulesStore()

const { activeSchedule } = toRefs(schedulesStore)

useHead({
  title: 'Головна',
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
})
</script>

<template>
  <MainLayout title="Розклад">
    <section class="HomeView">
      <div v-if="!activeSchedule" class="NoScheduleFallback">
        <Icon icon="ic:baseline-sentiment-slightly-dissatisfied" class="size-24" />
        <Title variant="large">У вас поки немає розкладів</Title>
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
