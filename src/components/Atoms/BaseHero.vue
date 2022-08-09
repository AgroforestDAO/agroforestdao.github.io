<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  backgroundImage?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="relative bg-white border-b-3 border-stone-700 dark:border-stone-300 h-screen px-20 bg-cover text-stone-700 dark:text-white" :style="{ backgroundImage: `url(${props.backgroundImage})` }">
    <div class="absolute bottom-[30vh] right-[10vw]">
      <div class="flex flex-col items-end">
        <div class="bg-white dark:bg-stone-700 w-fit py-2 px-3 my-3">
          <BaseSubtitle>
            {{ props.title }}
          </BaseSubtitle>
        </div>
        <div class="bg-white dark:bg-stone-700 w-9/12  md:w-1/2 py-3 px-7">
          <BaseTitle>
            {{ props.subtitle }}
          </BaseTitle>
        </div>
      </div>
    </div>
  </div>
</template>
