<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class=" bg-white border-b-3 border-black dark:border-white h-[90vh] text-end px-20">
    <div class="h-[90vh] py-[50vh]">
      <BaseTitle>
        {{ props.title }}
      </BaseTitle>
      <BaseSubtitle>
        {{ props.subtitle }}
      </BaseSubtitle>
    </div>
  </div>
</template>
