<script setup lang="ts">
interface Props {
  title?: string
  size?: 'screen' | 'half' | 'quarter'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'screen',
})

const sizes = {
  screen: ['h-screen'],
  half: ['h-[50vh]'],
  quarter: ['h-[25vh]'],
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-14" :class="[...sizes[size]]">
    <h2 class="subtitle brut-padding">
      {{ props.title }}
    </h2>
    <slot />
  </div>
</template>
