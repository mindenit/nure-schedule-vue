<script lang="ts" setup>
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'
import { TITLE_TEMPLATE, TITLE_TEMPLATE_PARAMS } from '@/core/constants'
import { Icon } from '@iconify/vue'
import { useHead } from '@unhead/vue'

useHead({
  title: '404',
  titleTemplate: TITLE_TEMPLATE,
  templateParams: TITLE_TEMPLATE_PARAMS
})
</script>
<template>
  <main class="NotFoundPage">
    <Title variant="big" class="!text-primary">Помилка 404</Title>
    <Title variant="large" class="max-sm:text-center">Сторінка не знайдена</Title>
    <Title variant="medium" class="max-sm:text-center">
      Вибачте сторінка, яку ви шукаєте, не існує або видалена
    </Title>
    <RouterLink :to="{ name: 'home' }" class="mt-4">
      <Button>
        <Icon icon="ic:baseline-arrow-back" />
        Повернутися на головну
      </Button>
    </RouterLink>
  </main>
</template>
<style lang="scss" scoped>
.NotFoundPage {
  @apply flex size-full flex-col items-center justify-center gap-4 p-4;
}
</style>
