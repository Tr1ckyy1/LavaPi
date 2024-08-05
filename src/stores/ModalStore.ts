import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('ModalStore', () => {
  const burgerMenu = ref(false)

  function openBurgerMenu() {
    burgerMenu.value = true
  }

  function closeBurgerMenu() {
    burgerMenu.value = false
  }

  return { burgerMenu, openBurgerMenu, closeBurgerMenu }
})
