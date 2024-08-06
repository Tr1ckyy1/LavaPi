<template>
  <div class="max-w-5xl mx-auto p-5 space-y-4">
    <h1 class="text-xl lg:text-3xl font-medium uppercase text-center">Create new user</h1>
    <UserForm text="Create" :loading="loading" @upload-data="createUser" />
  </div>
</template>

<script setup lang="ts">
import UserForm from '@/components/UserForm.vue'
import { createUser as createUserApi } from '@/services/api/users'
import { useModalStore } from '@/stores/ModalStore'
import type { UserData } from '@/types'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()
const { setToast } = useModalStore()

async function createUser(data: UserData) {
  loading.value = true
  try {
    const response = await createUserApi(data)
    router.replace({ name: 'home' })
    setToast({
      text: `${response.data.username} has been successfully created`,
      open: true,
      mode: 'success'
    })
  } catch (err) {
    console.error(err)
    setToast({
      text: `Something went wrong`,
      open: true,
      mode: 'error'
    })
  } finally {
    loading.value = false
  }
}
</script>
