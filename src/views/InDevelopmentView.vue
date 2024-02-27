<script lang="ts" setup>
import { MainLayout } from '@/layouts/MainLayout'
import { Title } from '@/components/ui/Title'
import { InDevelopmentLoader } from '@/components/ui/InDevelopmentLoader'
import { useHead } from '@unhead/vue'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'

useHead({
  title: 'У розробці',
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
})
</script>
<template>
  <MainLayout title="Упс...">
    <section class="Container">
      <Title variant="large" class="max-sm:text-center">Цей функціонал ще в розробці</Title>
      <Title variant="big" class="max-sm:text-center">
        Команда розробників реалізує його найближчим часом.
      </Title>
      <Title variant="big" class="max-sm:text-center"> Трішки терпіння... </Title>
      <InDevelopmentLoader />
    </section>
  </MainLayout>
</template>
<style lang="scss" scoped>
.Container {
  @apply mx-auto flex h-full flex-col items-center justify-center gap-2 max-sm:p-4 lg:w-[1300px];
}
</style>
