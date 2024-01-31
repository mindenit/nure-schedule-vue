<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useTheme } from '@/core/composables'

const theme = useTheme()
</script>

<template>
  <RouterView />
</template>
