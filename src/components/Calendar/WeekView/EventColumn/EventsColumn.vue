<script lang="ts" setup>
import { TIMELINE } from '@/core/constants'
import { WeekEventCell } from '../EventCell'
</script>
<template>
  <div class="WeekEventColumn">
    <WeekEventCell v-for="item in TIMELINE" :key="item" />
  </div>
</template>
<style lang="scss" scoped>
.WeekEventColumn {
  @apply flex h-full w-full min-w-24 flex-col;
}
</style>
