<script lang="ts" setup>
import { useTheme } from '@/core/composables'
import { ROUTES_META } from '@/core/constants/routes'
import { Icon } from '@iconify/vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { RouterLink } from 'vue-router'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import NavbarItem from './NavbarItem.vue'

defineProps<{ title: string }>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const { icon, toggle } = useTheme()
</script>
<template>
  <header
    :class="[
      {
        'is-desktop': breakpoints.isGreaterOrEqual('md'),
        'is-mobile': !breakpoints.isGreaterOrEqual('md')
      },
      'Navbar'
    ]"
  >
    <template v-if="breakpoints.isGreaterOrEqual('md')">
      <RouterLink :to="{ name: 'home' }"
        ><Logo>{{ title }}</Logo></RouterLink
      >
      <div class="flex flex-row items-center gap-6">
        <NavbarItem
          v-for="(elem, index) in ROUTES_META"
          :key="index"
          :name="elem.route"
          :icon="elem.icon"
        >
          {{ elem.name }}
        </NavbarItem>
        <Button variant="text" appearance="icon">
          <Icon :icon="icon" @click="toggle()" />
        </Button>
        <!-- <Button v-if="isAuthorized" variant="filled" @click="authStore.signout()">
          <Icon icon="ic:baseline-logout" />
          Вийти
        </Button>
        <RouterLink v-else :to="{ name: 'login' }">
          <Button variant="filled">
            <Icon icon="ic:baseline-log-in" />
            Увійти
          </Button>
        </RouterLink> -->
      </div>
    </template>
    <template v-if="breakpoints.isSmaller('md')">
      <NavbarItem
        v-for="(elem, index) in ROUTES_META"
        :key="index"
        :name="elem.route"
        :icon="elem.icon"
      >
        {{ elem.name }}
      </NavbarItem>
      <!-- <DialogRoot v-if="isAuthorized">
        <DialogTrigger>
          <NavbarItem name="login" icon="ic:baseline-account-circle" :as-link="false">
            Акаунт
          </NavbarItem>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Акаунт</DialogHeader>
          <div class="flex size-full flex-col items-center justify-center">
            <Button v-if="isAuthorized" variant="filled" @click="authStore.signout()">
              <Icon icon="ic:baseline-logout" />
              Вийти
            </Button>
          </div>
        </DialogContent>
      </DialogRoot>
      <NavbarItem v-else name="login" icon="ic:baseline-account-circle"> Акаунт </NavbarItem> -->
    </template>
  </header>
</template>
<style lang="scss" scoped>
.Navbar {
  @apply flex w-full items-center bg-surface px-5 py-3 lg:px-10;

  /* &:where(.is-mobile) {
    @apply justify-start gap-2 bottom-0 absolute;
  } */

  &:where(.is-mobile) {
    @apply fixed bottom-0 left-0 right-0 justify-between gap-2;
  }

  &:where(.is-desktop) {
    @apply justify-between;
  }
}
</style>
