<script setup lang="ts">
interface Props {
  label?: string
  icon?: string
  routeTo?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'i-clarity:tree-solid',
  routeTo: '/',
})
const go = (route = '') => {
  window.open(route, '_blank')
}
</script>

<template>
  <div class="cursor-pointer" @click="go(routeTo)">
    <slot>
      <div class="text-3xl m-auto" :class="icon" />
    </slot>
    <p class="pt-2">
      {{ props.label }}
    </p>
  </div>
</template>
