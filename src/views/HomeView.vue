<script setup lang="ts">
import { Calendar } from '@/components/Calendar'
import { useSchedulesStore } from '@/core/stores'
import { MainLayout } from '@/layouts/MainLayout'
import { Icon } from '@iconify/vue'
import { Title } from '@/components/ui/Title'
import { ScheduleDialog } from '@/components/ScheduleDialog'
import { toRefs } from 'vue'

const schedulesStore = useSchedulesStore()

const { activeSchedule } = toRefs(schedulesStore)
</script>

<template>
  <MainLayout>
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
