<script lang="ts" setup>
import { TIMELINE } from '@/core/constants/calendar'
import { WeekEventCell } from '../EventCell'
</script>
<template>
  <div class="WeekEventColumn">
    <WeekEventCell v-for="item in TIMELINE" :key="item" />
  </div>
</template>
<style lang="scss" scoped>
.WeekEventColumn {
  @apply flex flex-col w-full min-w-24 h-full;
}
</style>
