<template>
  <LoadingPage v-if="usersStore.usersLoading" />
  <section v-else class="space-y-10">
    <select v-if="sortedUsers.length > 0" v-model="sortOption" class="p-2">
      <option disabled value="">Sort by</option>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      <option value="age-asc">Age (Low to High)</option>
      <option value="age-desc">Age (High to Low)</option>
    </select>
    <h1 v-else class="text-2xl font-bold">No users were found on this page</h1>

    <ul class="grid xl:grid-cols-3 gap-5 md:grid-cols-2">
      <UserCardItem v-for="user in sortedUsers" :key="user.id" :user="user" />
    </ul>
    <ul class="flex gap-4">
      <li v-for="(_, index) in totalPages" :key="index">
        <button
          @click="setCurrentPage(index + 1)"
          class="rounded-full px-4 hover:bg-black hover:text-white sm:duration-300"
          :class="currentPage === index + 1 ? 'bg-black text-white ' : 'bg-gray-200'"
        >
          {{ index + 1 }}
        </button>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { useUsersStore } from '@/stores/UsersStore'
import { computed, onMounted, ref, watch } from 'vue'
import UserCardItem from '@/components/UserCardItem.vue'
import LoadingPage from '@/ui/LoadingPage.vue'
import { useRoute, useRouter } from 'vue-router'

const usersStore = useUsersStore()
const MAX_ITEMS_PER_PAGE = 9

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(usersStore.users.length / MAX_ITEMS_PER_PAGE))

const route = useRoute()
const router = useRouter()

const sortOption = ref('')

function setCurrentPage(page: number) {
  currentPage.value = page
  router.push({ query: { ...route.query, page } })
}

const sortedUsers = computed(() => {
  let sorted = [...usersStore.users]
  if (sortOption.value === 'A-Z') {
    sorted.sort((a, b) => a.username.localeCompare(b.username))
  } else if (sortOption.value === 'Z-A') {
    sorted.sort((a, b) => b.username.localeCompare(a.username))
  } else if (sortOption.value === 'age-asc') {
    sorted.sort((a, b) => a.age - b.age)
  } else if (sortOption.value === 'age-desc') {
    sorted.sort((a, b) => b.age - a.age)
  }
  const startIndex = (currentPage.value - 1) * MAX_ITEMS_PER_PAGE
  const endIndex = startIndex + MAX_ITEMS_PER_PAGE
  return sorted.slice(startIndex, endIndex)
})

onMounted(() => {
  usersStore.getUsers()
  const page = parseInt(route.query.page as string) || 1
  setCurrentPage(page)
})

watch(sortOption, () => {
  setCurrentPage(1)
})
</script>
