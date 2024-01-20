<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from '@/core/composables'

useTheme()
</script>

<template>
  <RouterView />
</template>
