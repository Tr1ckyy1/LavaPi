<template>
  <h1 class="mb-4 text-4xl font-bold">Error {{ params.status }}</h1>
  <RouterLink :to="{ name: 'home' }" class="text-blue-500 text-2xl hover:underline block"
    >Go to Homepage</RouterLink
  >
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const { params } = useRoute()
</script>
