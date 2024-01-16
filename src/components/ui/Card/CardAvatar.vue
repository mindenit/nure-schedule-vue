<script lang="ts" setup>
import { Title } from '@/components/ui/Title'

interface Props {
  letters: string
  color: string
}

const props = defineProps<Props>()
</script>
<template>
  <div
    class="flex justify-center items-center shrink-0 rounded-[50%] text-center w-[48px] h-[48px]"
    :style="{ background: props.color }"
  >
    <Title class="White text-center" variant="medium">{{ props.letters }}</Title>
  </div>
</template>
<style lang="scss" scoped>
.White {
  color: white;
}
</style>
