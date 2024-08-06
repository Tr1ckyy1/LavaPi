import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUsers as getUsersApi, getUser as getUserApi } from '@/services/api/users'
import type { UserData } from '@/types'

export const useUsersStore = defineStore('UsersStore', () => {
  const users = ref<UserData[]>([])
  const singleUser = ref<UserData | null>(null)
  const usersLoading = ref(false)
  const singleUserLoading = ref(false)

  async function getUsers() {
    usersLoading.value = true
    try {
      const { data } = await getUsersApi()
      users.value = data.users
    } catch (err) {
      console.error(err)
    } finally {
      usersLoading.value = false
    }
  }

  async function getUser(userId: string) {
    singleUserLoading.value = true
    try {
      const { data } = await getUserApi(userId)
      singleUser.value = data
    } catch (err) {
      console.error(err)
    } finally {
      singleUserLoading.value = false
    }
  }

  return { users, getUsers, usersLoading, singleUser, getUser, singleUserLoading }
})
