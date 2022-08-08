<script setup lang="ts">
// const user = useUserStore()
// const name = $ref(user.savedName)

// const router = useRouter()
// router.push(`/hi/${encodeURIComponent(name)}`)
// const { t } = useI18n()
</script>

<template>
  <div>
    <BaseHero title="AgroforestDAO" subtitle="Subtitle" />

    <SocialSection />
  </div>
</template>

<route lang="yaml">
meta:
  layout: landing
</route>
