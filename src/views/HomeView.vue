<script setup lang="ts">
import { Calendar } from '@/components/Calendar'
import { ScheduleDialog } from '@/components/ScheduleDialog'
import { Loader } from '@/components/ui/Loader'
import { Title } from '@/components/ui/Title'
import { TITLE_TEMPLATE } from '@/core/constants'
import { useSchedulesStore } from '@/core/stores'
import { useAuthStore } from '@/core/stores/auth'
import { MainLayout } from '@/layouts/MainLayout'
import { nurekit } from '@/libs/nurekit'
import { Icon } from '@iconify/vue'
import { useQuery } from '@tanstack/vue-query'
import { useHead, useSeoMeta } from '@unhead/vue'
import { toRefs } from 'vue'

const schedulesStore = useSchedulesStore()
const authStore = useAuthStore()

const { activeSchedule } = toRefs(schedulesStore)

const title = 'Головна'
const description =
  'Переглядайте розклад у максимально зручній формі, користуючись одним із трьох режимів показу. А також додавайте розклад інших груп та викладачів у свій список розкладів.'

useHead({
  title: title,
  titleTemplate: TITLE_TEMPLATE
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

const { data, isLoading } = useQuery({
  queryKey: ['user', authStore.tokens?.accessToken],
  async queryFn() {
    try {
      const user = await nurekit.users.info({
        accessToken: authStore.tokens?.accessToken as string
      })

      schedulesStore.recentSchedules = user.schedules

      if (!schedulesStore.activeSchedule?.name) {
        const activeSchedule = schedulesStore.recentSchedules[0]

        schedulesStore.activeSchedule = activeSchedule
      }

      return user
    } catch (e) {
      console.log(e)
    }
  },
  enabled: authStore.isAuthorized
})
</script>

<template>
  <MainLayout title="Розклад" :hideScrollbar="true" class="no-scrollbar overflow-y-scroll">
    <section class="HomeView">
      <Loader v-if="isLoading && authStore.isAuthorized" />
      <div v-else-if="!activeSchedule" class="NoScheduleFallback">
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
