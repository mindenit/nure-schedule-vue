<script lang="ts" setup>
import { Title } from '@/components/ui/Title'
import { TITLE_TEMPLATE } from '@/core/constants'
import { MainLayout } from '@/layouts/MainLayout'
import { useHead, useSeoMeta } from '@unhead/vue'
import { Button } from '@/components/ui/Button'
import { Icon } from '@iconify/vue'

const title = 'Автори'

useHead({
  title: title,
  titleTemplate: TITLE_TEMPLATE
})

useSeoMeta({
  title,
  ogTitle: title
})

const authors = [
  {
    name: 'Кирило Савєльєв',
    roles: 'Frontend Team Lead',
    img: '/img/kyrylo.webp',
    github: 'https://github.com/OneLiL05'
  },
  {
    name: 'Роман Трашутін',
    roles: 'Frontend розробник',
    img: '/img/roman.webp',
    github: 'https://github.com/perkinson1251'
  },
  {
    name: 'Артем Дадашʼянц',
    roles: 'CEO, Backend розробник, DevOps',
    img: '/img/artem.webp',
    github: 'https://github.com/ketronix-dev'
  }
]

const donations = [
  {
    name: 'Телеграм',
    url: 'https://t.me/mindenit'
  }
]
</script>
<template>
  <MainLayout :title>
    <section class="Wrapper">
      <Title variant="large" class="text-center">Розробники</Title>
      <ul class="flex flex-col gap-5">
        <li
          v-for="({ name, roles, img, github }, index) in authors"
          :key="index"
          class="AuthorCard"
        >
          <div class="flex flex-row items-center gap-4">
            <img class="AuthorImage" :src="img" />
            <div class="flex flex-col gap-1">
              <Title variant="big">{{ name }}</Title>
              <Title variant="medium">{{ roles }}</Title>
            </div>
          </div>
          <a :href="github" target="_blank">
            <Button variant="text" appearance="icon">
              <Icon icon="octicon:mark-github-16" />
            </Button>
          </a>
        </li>
      </ul>
    </section>
    <section class="Wrapper">
      <Title variant="large" class="!mb-0 text-center">Звʼязатися з нами</Title>
      <div class="flex w-full items-center justify-center gap-4 max-sm:flex-col">
        <a v-for="({ name, url }, index) in donations" :key="index" :href="url" target="_blank">
          <Button variant="outlined" class="w-[156px]">{{ name }}</Button>
        </a>
      </div>
    </section>
  </MainLayout>
</template>
<style lang="scss" scoped>
.Wrapper {
  @apply mx-auto box-border flex w-full max-w-[750px] flex-col gap-5 p-4 max-sm:last:pb-24;
}

.AuthorCard {
  @apply flex h-20 w-full flex-row items-center justify-between rounded-2xl border border-outline bg-surface px-4;
}

.AuthorImage {
  @apply size-12 rounded-lg bg-app-bg object-fill;
}
</style>
