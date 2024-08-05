<template>
  <LoadingPage v-if="usersStore.loading" />
  <section v-else class="space-y-10">
    <ul class="grid xl:grid-cols-3 gap-5 md:grid-cols-2">
      <UserCardItem v-for="user in usersStore.paginated" :key="user.id" :user="user" />
    </ul>
    <ul class="flex gap-4">
      <li v-for="(_, index) in usersStore.totalPages" :key="index">
        <button
          @click="usersStore.setCurrentPage(index + 1)"
          class="rounded-full px-4"
          :class="usersStore.currentPage === index + 1 ? 'bg-black text-white ' : 'bg-gray-200'"
        >
          {{ index + 1 }}
        </button>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/UsersStore'
import { onMounted } from 'vue'
import UserCardItem from '@/components/UserCardItem.vue'
import LoadingPage from '@/ui/LoadingPage.vue'

const usersStore = useUsersStore()

onMounted(() => {
  usersStore.getUsers()
})
</script>
