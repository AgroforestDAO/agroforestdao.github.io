<script setup lang="ts">
interface Props {
  label?: string
}
const props = defineProps<Props>()
</script>

<template>
  <h2 class="text-3xl">
    <slot>
      {{ props.label }}
    </slot>
  </h2>
</template>
