<template>
  <header class="p-4 lg:px-8 bg-gray-100 shadow-md sticky top-0 w-full">
    <NavModal />
    <nav class="flex justify-between items-center">
      <button
        @click="navigate"
        class="font-bold text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-green-500 via-orange-500 to-purple-500 hover:text-transparent duration-300 cursor-pointer"
      >
        LavaPi
      </button>
      <BurgerMenuIcon class="lg:hidden" @click="openBurgerMenu" />
      <ul class="hidden lg:flex justify-between gap-5 text-2xl">
        <li
          class="capitalize hover:text-purple-500 font-medium cursor-pointer duration-300"
          v-for="item in pageList"
          :key="item"
        >
          <RouterLink :to="{ name: item }">
            {{ item }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import BurgerMenuIcon from '@/icons/BurgerMenuIcon.vue'
import { useModalStore } from '@/stores/ModalStore'
import NavModal from './NavModal.vue'
import { useRouter } from 'vue-router'

const pageList = ['create', 'delete']
const router = useRouter()

function navigate() {
  if (router.currentRoute.value.name !== 'home') router.push({ name: 'home' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { openBurgerMenu } = useModalStore()
</script>
