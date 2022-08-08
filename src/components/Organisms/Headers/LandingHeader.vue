<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <div class="flex p-3 justify-between border-b-3 border-black dark:border-white">
    <div>
      <!-- todo: change logo bg color(transparent) -->
      <img v-if="isDark" src="/agroforestdao_logo_white.png" alt="Agroforest DAO" class="w-14">
      <img v-else src="/agroforestdao_logo.png" alt="Agroforest DAO" class="w-14">
    </div>
    <Button class="icon-btn" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </Button>
  </div>
</template>
