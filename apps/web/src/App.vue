<script setup lang="ts">
import { ref, onMounted } from 'vue'

export type UserTheme = 'light' | 'dark'

const setTheme = (theme: UserTheme) => {
  localStorage.setItem('user-theme', theme)
  userTheme.value = theme
  document.documentElement.className = theme
}

const getTheme = (): UserTheme => {
  return localStorage.getItem('user-theme') as UserTheme
}

// const toggleTheme = (): void => {
//   const activeTheme = localStorage.getItem('user-theme')
//   if (activeTheme === 'light') {
//     setTheme('dark')
//   } else {
//     setTheme('light')
//   }
// }

const getMediaPreference = (): UserTheme => {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  if (hasDarkPreference) {
    return 'dark'
  } else {
    return 'light'
  }
}

const userTheme = ref<UserTheme>(getTheme() || getMediaPreference())

onMounted(() => setTheme(userTheme.value))
</script>

<template>
  <main
    class="flex flex-col space-y-4 min-h-screen max-h-screen text-center items-center justify-center"
  >
    <!-- <header
      class="absolute px-4 top-2 w-full font-semibold flex justify-between"
    >
      <div>light / dark</div>
      <div>source</div>
    </header> -->
    <div class="text-3xl font-bold">
      <h1>ブープ</h1>
      <h2>Bū pu</h2>
    </div>
    <p class="text-4xl font-bold">69420 bp</p>
    <footer class="absolute px-4 bottom-2 w-full font-semibold">
      27348 people booping
    </footer>
  </main>
</template>

<style>
@import './assets/base.css';
</style>
