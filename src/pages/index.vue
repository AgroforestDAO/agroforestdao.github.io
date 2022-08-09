<script setup lang="ts">
// const user = useUserStore()
// const name = $ref(user.savedName)

// const router = useRouter()
// router.push(`/hi/${encodeURIComponent(name)}`)
// const { t } = useI18n()
</script>

<template>
  <div>
    <BaseHero title="AgroforestDAO" subtitle="Decentered ReFi for a Rooted Society" background-image="https://natturis.com.br/v_2016/wp-content/uploads/2018/05/agricultura-sintropica.jpg" />

    <AboutSection />
    <SocialSection />
  </div>
</template>

<route lang="yaml">
meta:
  layout: landing
</route>
