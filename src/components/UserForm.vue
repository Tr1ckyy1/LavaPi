<template>
  <form @submit="addOrEdit" class="border border-rounded sm:p-10 py-2 px-4 text-sm sm:text-base">
    <BaseInput
      title="First Name"
      placeholder="Enter your first name"
      name="firstName"
      id="first-name"
      type="text"
      :value="user?.firstName"
    />
    <BaseInput
      title="Last Name"
      placeholder="Enter your last name"
      name="lastName"
      id="last-name"
      type="text"
      :value="user?.lastName"
    />
    <BaseInput
      title="Username"
      placeholder="Enter your username"
      name="username"
      id="username"
      type="text"
      :value="user?.username"
    />
    <BaseInput
      title="Age"
      placeholder="Enter your age"
      name="age"
      id="age"
      type="number"
      :value="user?.age"
    />
    <button
      :disabled="loading"
      class="bg-blue-500 px-4 py-1 rounded-md text-white sm:enabled:hover:brightness-90 disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      {{ loading ? 'Loading...' : text }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import BaseInput from './BaseInput.vue'
import type { UserData } from '@/types'

const emit = defineEmits<{
  (e: 'upload-data', data: UserData): void
}>()

defineProps<{
  loading: boolean
  user?: UserData | null
  text: string
}>()

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('This field is required')
    .min(3, 'Must be at least 3 characters'),
  lastName: yup.string().required('This field is required').min(3, 'Must be at least 3 characters'),
  username: yup
    .string()
    .required('This field is required')
    .min(3, 'Must be at least 3 characters')
    .max(20, 'Cannot exceed more than 20 characters'),
  age: yup
    .number()
    .required('This field is required')
    .positive('Must be a positive number')
    .integer('Must be an integer')
    .max(120, 'Cannot be more than 120')
    .typeError('Must be a number')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})
const addOrEdit = handleSubmit(async (values) => {
  emit('upload-data', values as UserData)
})
</script>
