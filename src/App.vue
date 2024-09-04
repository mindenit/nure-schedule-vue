<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useGlobalError, useTheme } from '@/core/composables'
import DowntimeView from './views/DowntimeView.vue'

const theme = useTheme()
const { isGlobalError } = useGlobalError()
</script>
<template>
  <RouterView v-if="!isGlobalError" />
  <DowntimeView v-else />
</template>
