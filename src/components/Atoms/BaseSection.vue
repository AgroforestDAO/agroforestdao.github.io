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
const titleClasses = {
  screen: ['text-3xl mb-7'],
  half: ['text-2xl mb-7'],
  quarter: ['text-xl mb-7'],
}
</script>

<template>
  <div class="flex flex-col items-center justify-center" :class="[...sizes[size]]">
    <h2 class="subtitle brut-padding" :class="[...titleClasses[size]]">
      {{ props.title }}
    </h2>
    <slot />
  </div>
</template>
