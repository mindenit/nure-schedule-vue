<script setup lang="ts">
import { Calendar } from '@/components/Calendar'
import { MainLayout } from '@/layouts/MainLayout'
</script>

<template>
  <MainLayout>
    <section class="flex flex-col h-full gap-5 p-5 box-border">
      <Calendar />
    </section>
  </MainLayout>
</template>
