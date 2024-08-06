<template>
  <Transition
    enter-active-class="duration-300"
    leave-active-class="duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="modalIsOpen"
      @click.self="closeModal"
      class="fixed inset-0 z-10 bg-gray-200/10 backdrop-blur flex justify-center items-center p-4"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  modalIsOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close-modal'): void
}>()

function closeModal() {
  emit('close-modal')
}
</script>
