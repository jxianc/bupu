<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<template>
  <main
    class="flex flex-col space-y-4 min-h-screen max-h-screen text-center items-center justify-center"
  >
    <header
      class="absolute px-4 top-4 w-full font-semibold flex justify-between"
    >
      <button
        class="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-[0.3em] font-semibold dark:hover:bg-zinc-700 hover:bg-zinc-300"
        @click="toggleTheme()"
      >
        {{ isDark ? 'Light' : 'Dark' }}
      </button>
      <div>source</div>
    </header>
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
