<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <div class="flex p-3 justify-between border-b-3 border-dark dark:border-light bg-light dark:bg-dark text-dark dark:text-light">
    <div>
      <!-- todo: change logo bg color(transparent) -->
      <img v-if="isDark" src="/agroforestdao_logo_white.png" alt="Agroforest DAO" class="w-14">
      <img v-else src="/agroforestdao_logo.png" alt="Agroforest DAO" class="w-14">
    </div>
    <div class="flex items-center space-x-3">
      <MenuItem label="Home" />
      <MenuItem label="Events" />
      <MenuItem label="Docs" />

      <Button class="icon-btn pl-7" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </Button>
      <Button class="icon-btn">
        <div i="carbon-menu" />
      </Button>
    </div>
  </div>
</template>
