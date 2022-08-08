<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'AgroforestDAO',
  meta: [
    { name: 'description', content: '' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    // {
    //   rel: 'icon',
    //   type: 'image/svg+xml',
    //   href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    // },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/agroforestdao_logo_notitle.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
