import { instance } from '@/plugins/axios'

export async function getUsers() {
  return instance.get('/users')
}
