<script lang="ts" setup>
import { useHead } from '@unhead/vue'
import { TITLE_TEMPLATE } from '@/core/constants'
import { Title } from '@/components/ui/Title'

useHead({
  title: 'Додаток тимчасово недоступний',
  titleTemplate: TITLE_TEMPLATE
})
</script>

<template>
  <main class="DowntimePage">
    <Title variant="big" class="!text-primary">Упс...</Title>
    <Title variant="large" class="max-sm:text-center">Додаток тимчасово недоступний</Title>
    <Title variant="medium" class="text-center">
      Вибачте, виникли технічні трудноші, наша команда вже працює над їх виправленням. <br />
      Спробуйте зайти пізніше
    </Title>
  </main>
</template>

<style lang="scss" scoped>
.DowntimePage {
  @apply flex size-full flex-col items-center justify-center gap-4 p-4;
}
</style>
