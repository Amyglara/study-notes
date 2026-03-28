<template>
  <Layout>
    <template #home-hero-before>
      <HomeHero />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HomeHero from './HomeHero.vue'
const { Layout } = DefaultTheme
</script>
