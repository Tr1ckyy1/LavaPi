<template>
  <li>
    <RouterLink
      :to="{ name: 'user-details', params: { userId: user.id } }"
      class="border border-[#d0d5dd] rounded-lg sm:hover:border-black sm:active:border-black sm:duration-300 cursor-pointer flex items-center gap-4 px-4 py-2 text-sm sm:text-base"
    >
      <img :src="user.image" />
      <ul class="truncate">
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
          Email:
          <span class="font-semibold">
            {{ user.email }}
          </span>
        </li>
      </ul>
      <p
        class="ml-auto self-start capitalize flex flex-col"
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
<!-- <template>
  <li v-if="quiz.total_questions > 0">
    <RouterLink
      :to="{ name: 'showQuiz', params: { quizId: quiz.id } }"
      class="group h-full flex flex-col p-6 gap-3 cursor-pointer sm:duration-300"
      :class="checkSimilarQuizzes"
    >
      <div>
        <img :src="quiz.image" class="rounded-lg w-full max-h-60 object-cover" />
      </div>
      <ul class="flex flex-wrap gap-x-6 gap-y-2">
        <li
          v-for="(category, index) in quiz.categories"
          :key="category.id"
          class="text-blue-main font-semibold relative"
          :class="{
            'before:absolute before:w-1 before:h-1 before:rounded-full before:bg-[#D0D5DD] before:top-1/2 before:-translate-y-1/2 before:left-full before:ml-2.5':
              index !== quiz.categories.length - 1
          }"
        >
          {{ category.name }}
        </li>
      </ul>
      <div class="flex items-center justify-between">
        <h1 class="font-semibold text-2xl">{{ quiz.title }}</h1>
        <LinkIcon class="hidden group-hover:block" />
      </div>
      <div class="flex gap-6 flex-wrap">
        <div class="flex items-center gap-4">
          <div
            class="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
            :class="completedOrNot"
          >
            <QuizCompletedIcon v-if="userLoggedIn" />
            <QuizNotCompletedIcon v-else />
          </div>
          <div class="text-sm">
            <h2 class="font-semibold">
              {{ userLoggedIn ? 'Completed' : 'Not Completed' }}
            </h2>
            <p v-if="userLoggedIn">{{ quizCompletedDate }}</p>
            <p class="text-[#4754674D]" v-else>Date,Time</p>
          </div>
        </div>
        <div class="text-sm">
          <h2 class="font-semibold">Total time</h2>
          <p v-if="userLoggedIn">
            {{ quiz.user_time }}{{ quiz.user_time && quiz.user_time > 1 ? 'Minutes' : 'Minute' }}
          </p>
          <p v-else class="text-[#4754674D]">N/A</p>
        </div>
        <div class="text-sm">
          <h2 class="font-semibold">Total users</h2>
          <p>{{ quiz.total_users }}</p>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
            :style="{ 'background-color': quiz.difficulty_level.bg_color_normal }"
          >
            <DifficultyLevelIcon :stroke="quiz.difficulty_level.color" />
          </div>
          <div class="text-sm">
            <h2 class="font-semibold">Difficulty level</h2>
            <p>{{ quiz.difficulty_level.name }}</p>
          </div>
        </div>

        <div v-if="userLoggedIn" class="flex items-center gap-3">
          <div
            class="w-10 h-10 bg-[#FCE7F6] rounded-full shrink-0 flex items-center justify-center"
          >
            <PointsIcon />
          </div>
          <div class="text-sm">
            <h2 class="font-semibold">Points</h2>
            <p>{{ quiz.user_points }}/{{ quiz.total_points }}</p>
          </div>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script>
import LinkIcon from '@/icons/LinkIcon.vue'
import QuizCompletedIcon from '@/icons/QuizCompletedIcon.vue'
import QuizNotCompletedIcon from '@/icons/QuizNotCompletedIcon.vue'
import PointsIcon from '@/icons/PointsIcon.vue'
import DifficultyLevelIcon from '@/icons/DifficultyLevelIcon.vue'

export default {
  props: ['quiz', 'mode'],

  components: {
    LinkIcon,
    QuizCompletedIcon,
    QuizNotCompletedIcon,
    PointsIcon,
    DifficultyLevelIcon
  },
  computed: {
    checkSimilarQuizzes() {
      return this.mode === 'similar'
        ? 'bg-[#D0D5DD]/20 border border-[#D0D5DD] rounded-lg sm:hover:border-black active:border-black'
        : 'sm:hover:ring-1 sm:hover:rounded-xl sm:hover:ring-black  active:ring-1 active:ring-black shadow-lg'
    },
    userLoggedIn() {
      return this.$store.getters['auth/isAuthenticated'] && this.quiz.user_completed
    },
    completedOrNot() {
      return this.userLoggedIn && this.quiz.user_completed ? 'bg-[#D1FADF]' : 'bg-[#F6F6F7]'
    },
    quizCompletedDate() {
      const date = new Date(this.quiz.quiz_completed_at)
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
      return formattedDate
    }
  }
}
</script> -->
