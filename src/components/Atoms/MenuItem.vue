<script setup lang="ts">
interface Props {
  label?: string
  routeTo?: string
}

const props = defineProps<Props>()
const router = useRouter()

const go = (route = '') => {
  router.push(route)
}
</script>

<template>
  <p class="icon-btn text-primary-light hover:underline underline-offset-2" @click="go(props?.routeTo)">
    <slot>
      {{ props?.label }}
    </slot>
  </p>
</template>
