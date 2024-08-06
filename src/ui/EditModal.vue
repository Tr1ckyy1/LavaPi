<template>
  <div class="py-10 bg-gray-100 border space-y-4 w-full max-w-5xl mx-auto">
    <h1 class="uppercase text-xl lg:text-3xl font-medium text-center">edit user profile</h1>
    <UserForm
      text="Edit"
      :loading="loading"
      :user="user"
      class="border-none"
      @upload-data="updateUser"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserForm from '@/components/UserForm.vue'
import { updateUser as updateUserApi } from '@/services/api/users'
import type { UserData } from '@/types'
import { useModalStore } from '@/stores/ModalStore'

const props = defineProps<{
  user: UserData | null
}>()

const loading = ref(false)
const modalStore = useModalStore()

async function updateUser(data: UserData) {
  if (props.user && props.user.id) {
    loading.value = true
    try {
      const response = await updateUserApi(data, props.user.id.toString())
      modalStore.closeEditModal()
      modalStore.setToast({
        text: `${response.data.username} has been updated`,
        open: true,
        mode: 'success'
      })
    } catch (err) {
      console.error(err)
      modalStore.setToast({
        text: `Something went wrong`,
        open: true,
        mode: 'error'
      })
    } finally {
      loading.value = false
    }
  }
}
</script>
