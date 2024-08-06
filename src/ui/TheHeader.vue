<template>
  <header class="p-4 lg:px-8 bg-gray-100 shadow-md sticky top-0 w-full">
    <nav class="flex justify-between items-center">
      <button
        @click="navigate"
        class="font-bold text-xl lg:text-4xl bg-clip-text bg-gradient-to-r from-green-500 via-orange-500 to-purple-500 hover:text-transparent duration-300 cursor-pointer"
      >
        LavaPi
      </button>
      <RouterLink
        :to="{ name: 'create' }"
        class="sm:hover:text-purple-500 font-medium cursor-pointer sm:duration-300 sm:text-2xl"
        >Create new user</RouterLink
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function navigate() {
  if (router.currentRoute.value.name !== 'home') router.push({ name: 'home' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
