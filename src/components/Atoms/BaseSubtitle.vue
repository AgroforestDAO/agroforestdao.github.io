<script setup lang="ts">
interface Props {
  label?: string
}
const props = defineProps<Props>()
</script>

<template>
  <h2 class="subtitle">
    <slot>
      {{ props.label }}
    </slot>
  </h2>
</template>
