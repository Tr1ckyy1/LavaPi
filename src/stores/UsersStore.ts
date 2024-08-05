import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getUsers as getUsersApi } from '@/services/api/users'
import type { UserData } from '@/types'

export const useUsersStore = defineStore('UsersStore', () => {
  const users = ref<UserData[]>([])
  const loading = ref(false)

  const MAX_ITEMS_PER_PAGE = 9
  const currentPage = ref(1)
  const paginated = computed(() => users.value.slice(currentPage.value - 1, MAX_ITEMS_PER_PAGE))
  const totalPages = computed(() => Math.ceil(users.value.length / MAX_ITEMS_PER_PAGE))

  async function getUsers() {
    try {
      loading.value = true
      const { data } = await getUsersApi()
      users.value = data.users
      console.log(data.users)
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  function setCurrentPage(page: number) {
    currentPage.value = page
  }

  return { users, getUsers, loading, paginated, currentPage, totalPages, setCurrentPage }
})
