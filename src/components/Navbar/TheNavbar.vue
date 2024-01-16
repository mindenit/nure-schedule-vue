<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints, useTitle } from '@vueuse/core'
import { computed } from 'vue'
import { Logo } from '../ui/Logo'
import { useRoute } from 'vue-router'
import NavbarItem from './NavbarItem.vue'
import { Button } from '../ui/Button'
import { Icon } from '@iconify/vue'
import { useTheme } from '@/core/composables'
import { ROUTES_META } from '@/core/constants/routes'

const breakpoints = useBreakpoints(breakpointsTailwind)

const deviceClass = computed(() => {
  return breakpoints.isGreaterOrEqual('md') ? 'is-desktop' : 'is-mobile'
})

const title = useTitle()

const route = useRoute()

const { icon, toggle } = useTheme()
</script>
<template>
  <header :class="`Navbar ${deviceClass}`">
    <template v-if="breakpoints.isGreaterOrEqual('md')">
      <Logo>{{ title }}</Logo>
      <div class="flex flex-row items-center gap-6">
        <NavbarItem
          v-for="(elem, index) in ROUTES_META"
          :key="index"
          :name="elem.route"
          :is-active="elem.route === route.name?.toString()"
          :icon="elem.icon"
        >
          {{ elem.name }}
        </NavbarItem>

        <Button variant="text" appearance="icon">
          <Icon :icon="icon" @click="toggle()" />
        </Button>
      </div>
    </template>
    <template v-if="breakpoints.isSmaller('md')">
      <NavbarItem
        v-for="(elem, index) in ROUTES_META"
        :key="index"
        :name="elem.route"
        :is-active="elem.route === route.name?.toString()"
        :icon="elem.icon"
      >
        {{ elem.name }}
      </NavbarItem>
    </template>
  </header>
</template>
<style lang="scss" scoped>
.Navbar {
  @apply flex w-full h-20 px-5 lg:h-[84px] items-center bg-surface lg:px-10;

  &:where(.is-mobile) {
    @apply justify-start gap-2 bottom-0 absolute;
  }

  &:where(.is-desktop) {
    @apply justify-between;
  }
}
</style>
