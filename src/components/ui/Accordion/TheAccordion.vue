<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'

const accordionOpen = ref<boolean>(false)

const props = defineProps<{
  title: string
  id: string
  active?: boolean
}>()

onMounted(() => {
  accordionOpen.value = props.active
})
</script>
<template>
  <div class="rounded-xl bg-surface-container p-2">
    <h2>
      <button
        :id="`accordion-title-${id}`"
        class="flex w-full items-center justify-between py-2 text-left font-semibold"
        @click.prevent="accordionOpen = !accordionOpen"
        :aria-expanded="accordionOpen"
        :aria-controls="`accordion-text-${id}`"
      >
        <span>{{ title }}</span>
        <Icon
          icon="ic:round-play-arrow"
          class="transition duration-200 ease-out"
          :class="{ '!rotate-90': accordionOpen }"
        />
      </button>
    </h2>
    <div
      :id="`accordion-text-${id}`"
      role="region"
      :aria-labelledby="`accordion-title-${id}`"
      class="grid overflow-hidden text-sm text-contrast transition-all duration-300 ease-in-out"
      :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
    >
      <div class="overflow-hidden">
        <p class="pb-3">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
