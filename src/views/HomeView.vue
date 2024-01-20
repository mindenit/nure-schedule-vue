<script setup lang="ts">
import { MainLayout } from '@/layouts/MainLayout'
import { Calendar } from '@/components/Calendar'
</script>

<template>
  <MainLayout>
    <section class="flex flex-col h-full p-5 box-border">
      <Calendar />
    </section>
  </MainLayout>
</template>
