<script setup lang="ts">
interface Props {
  label?: string

}
const props = defineProps<Props>()
</script>

<template>
  <h1 class="title">
    <slot>
      {{ props.label }}
    </slot>
  </h1>
</template>
