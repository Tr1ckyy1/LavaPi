import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Toast } from '@/types'

export const useModalStore = defineStore('ModalStore', () => {
  const deleteModal = ref(false)
  const editModal = ref(false)

  const toast = ref<Toast>({
    open: false,
    text: '',
    mode: ''
  })

  function openDeleteModal() {
    deleteModal.value = true
  }

  function closeDeleteModal() {
    deleteModal.value = false
  }

  function openEditModal() {
    editModal.value = true
  }

  function closeEditModal() {
    editModal.value = false
  }

  function setToast(payload: Toast) {
    toast.value = payload
    setTimeout(() => {
      closeToast()
    }, 5000)
  }

  function closeToast() {
    toast.value = {
      open: false,
      text: '',
      mode: ''
    }
  }

  return {
    deleteModal,
    openDeleteModal,
    closeDeleteModal,
    editModal,
    openEditModal,
    closeEditModal,
    toast,
    setToast,
    closeToast
  }
})
