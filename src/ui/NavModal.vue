<template>
  <Transition
    enter-active-class="duration-300"
    leave-active-class="duration-300"
    enter-from-class="translate-x-full"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="modalStore.burgerMenu"
      @click.self="modalStore.closeBurgerMenu"
      class="fixed inset-0 bg-gray-200 z-10 flex items-center justify-center no-scroll lg:hidden"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/ModalStore'

const modalStore = useModalStore()
</script>
