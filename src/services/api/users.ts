import { instance } from '@/plugins/axios'
import type { UserData } from '@/types'

export async function getUsers() {
  return instance.get('/users')
}

export async function getUser(userId: string) {
  return instance.get(`/users/${userId}`)
}

export async function deleteUser(userId: string) {
  return instance.delete(`/users/${userId}`)
}

export async function createUser(data: UserData) {
  return instance.post('/users/add', data)
}

export async function updateUser(data: UserData, userId: string) {
  return instance.put(`/users/${userId}`, data)
}
