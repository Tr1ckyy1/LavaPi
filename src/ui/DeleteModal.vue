<template>
  <div class="p-6 bg-gray-200 space-y-4 rounded-xl">
    <h1 class="font-bold text-center">
      Are you sure you want to delete {{ firstName }} {{ lastName }}?
    </h1>
    <div class="flex justify-between">
      <button
        @click="deleteUser"
        class="bg-red-500 text-white px-4 py-1 rounded-md sm:hover:brightness-95"
      >
        Confirm
      </button>
      <button
        @click="modalStore.closeDeleteModal"
        class="bg-gray-500 text-white px-4 py-1 rounded-md sm:hover:brightness-95"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/ModalStore'

defineProps<{
  firstName?: string
  lastName?: string
}>()

const emit = defineEmits<{
  (e: 'delete-user'): void
}>()

const modalStore = useModalStore()

function deleteUser() {
  emit('delete-user')
}
</script>
