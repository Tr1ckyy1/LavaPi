<template>
  <TheHeader />
  <main class="px-4 py-10 lg:px-8">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import TheHeader from './ui/TheHeader.vue'
</script>
