<script setup lang="ts">
interface Props {
  label?: string

}
const props = defineProps<Props>()
</script>

<template>
  <h1 class="text-7xl font-bold">
    <slot>
      {{ props.label }}
    </slot>
  </h1>
</template>
