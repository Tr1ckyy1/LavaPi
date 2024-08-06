<template>
  <div class="flex flex-col gap-2.5 mb-4">
    <label :for="id">{{ title }} <span class="text-red-500">*</span></label>
    <Field
      :placeholder="placeholder"
      :name="name"
      id="first-name"
      class="border focus:border-blue-500 peer text-black placeholder:text-gray-500 bg-gray-200 pl-4 py-2 pr-9 outline-none rounded-[4px] focus:bg-white duration-150"
      :validateOnInput="true"
      :validateOnBlur="false"
      :type="type"
      :value="value"
    />
    <ErrorMessage class="text-red-500" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
defineProps<{
  title: string
  placeholder: string
  name: string
  id: string
  type: string
  value?: string | number
}>()
</script>
