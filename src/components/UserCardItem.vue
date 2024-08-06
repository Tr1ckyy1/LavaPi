<template>
  <li>
    <RouterLink
      :to="{ name: 'user-details', params: { userId: user.id } }"
      class="border border-[#d0d5dd] rounded-lg sm:hover:border-black sm:active:border-black sm:duration-300 cursor-pointer flex items-center gap-4 px-1 sm:px-4 py-2 text-sm sm:text-base"
    >
      <img
        :src="user.image"
        class="w-10 h-10 object-cover sm:w-auto sm:h-auto"
        alt="user-avatars"
      />
      <ul>
        <li>
          Username:
          <span class="font-semibold">
            {{ user.username }}
          </span>
        </li>
        <li>
          Age:
          <span class="font-semibold">
            {{ user.age }}
          </span>
        </li>

        <li>
          Role:
          <span class="font-semibold capitalize">
            {{ user.role }}
          </span>
        </li>
      </ul>
      <p
        class="ml-auto self-start capitalize"
        :class="user.gender === 'male' ? 'text-blue-400' : 'text-pink-400'"
      >
        {{ user.gender }}
      </p>
    </RouterLink>
  </li>
</template>
<script setup lang="ts">
import type { UserData } from '@/types'
defineProps<{
  user: UserData
}>()
</script>
