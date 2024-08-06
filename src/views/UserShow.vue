<template>
  <LoadingPage v-if="usersStore.singleUserLoading" />
  <section v-else-if="!usersStore.singleUserLoading && usersStore.singleUser">
    <div class="border p-5 sm:p-10 w-fit lg:text-xl max-w-5xl mx-auto">
      <ParentModal :modalIsOpen="modalStore.deleteModal" @close-modal="modalStore.closeDeleteModal">
        <DeleteModal
          @delete-user="deleteUser"
          :firstName="currentUser?.firstName"
          :lastName="currentUser?.lastName"
        />
      </ParentModal>

      <ParentModal :modalIsOpen="modalStore.editModal" @close-modal="modalStore.closeEditModal">
        <EditModal :user="currentUser" />
      </ParentModal>

      <img :src="currentUser?.image" />
      <h1 class="font-bold text-2xl">
        {{ currentUser?.username }}
      </h1>
      <ul>
        <li>First name: {{ currentUser?.firstName }}</li>
        <li>Last name: {{ currentUser?.lastName }}</li>
        <li>Age: {{ currentUser?.age }}</li>
        <li>Phone: {{ currentUser?.phone }}</li>
        <li>Email: {{ currentUser?.email }}</li>
        <li class="capitalize">Role: {{ currentUser?.role }}</li>
        <li>
          Address: {{ currentUser?.address.state }}, {{ currentUser?.address.city }},
          {{ currentUser?.address.country }}
        </li>
      </ul>
      <div class="space-x-4 mt-4">
        <button
          @click="modalStore.openEditModal"
          class="px-4 py-1 bg-slate-500 text-white rounded-md hover:brightness-90 duration-300"
        >
          Edit
        </button>
        <button
          @click="modalStore.openDeleteModal"
          class="px-4 py-1 bg-red-500 text-white rounded-md hover:brightness-90 duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  </section>
  <div v-else class="space-y-4">
    <h1 class="text-4xl font-bold">User does not exist</h1>
    <RouterLink :to="{ name: 'home' }" class="text-blue-500 text-2xl hover:underline block"
      >Go to Homepage</RouterLink
    >
  </div>
</template>
<script setup lang="ts">
import { useModalStore } from '@/stores/ModalStore'
import { useUsersStore } from '@/stores/UsersStore'
import DeleteModal from '@/ui/DeleteModal.vue'
import LoadingPage from '@/ui/LoadingPage.vue'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { deleteUser as deleteUserApi } from '@/services/api/users'
import ParentModal from '@/ui/ParentModal.vue'
import EditModal from '@/ui/EditModal.vue'

const usersStore = useUsersStore()
const modalStore = useModalStore()
const currentUser = computed(() => usersStore.singleUser)
const route = useRoute()
const router = useRouter()

async function deleteUser() {
  try {
    const { data } = await deleteUserApi(route.params.userId.toString())
    if (data.isDeleted) {
      modalStore.setToast({
        open: true,
        text: 'User deleted successfully',
        mode: 'success'
      })
    }
  } catch (err) {
    console.error(err)
    modalStore.setToast({
      open: true,
      text: 'Something went wrong',
      mode: 'error'
    })
  } finally {
    router.replace({ name: 'home' })
    modalStore.closeDeleteModal()
  }
}

onMounted(() => {
  usersStore.getUser(route.params.userId.toString())
})
</script>
