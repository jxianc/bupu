<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import {
  useAddBupuMutation,
  useBoopedSubscription,
  useGetBupuQuery,
} from './generated/graphql'
import Vue3autocounter from 'vue3-autocounter'

const isDark = useDark()
const toggleTheme = useToggle(isDark)

const { data: getBupuData } = useGetBupuQuery()
const { executeMutation: addBupu } = useAddBupuMutation()
const { data: boopedData } = useBoopedSubscription({}, (_oldBupu, response) => {
  return response
})
</script>

<template>
  <header class="absolute px-4 top-4 w-full flex justify-between z-10">
    <button
      class="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-[0.3em] font-semibold dark:hover:bg-zinc-700 hover:bg-zinc-300"
      @click="toggleTheme()"
    >
      {{ isDark ? 'Light' : 'Dark' }}
    </button>
    <a
      href="https://github.com/jxianc/bupu"
      target="_blank"
      rel="noopener noreferrer"
      class="font-semibold hover:underline hover:text-gray-500"
      >source</a
    >
  </header>
  <main
    class="flex flex-col space-y-4 min-h-screen max-h-screen text-center items-center justify-center"
    @click="addBupu({})"
  >
    <div>
      <div class="text-3xl font-bold">
        <h1>ブープ</h1>
        <h2>Bū pu</h2>
      </div>
      <Vue3autocounter
        ref="counter"
        :startAmount="0"
        :endAmount="boopedData?.booped || getBupuData?.getBupu.bp"
        suffix=" bp"
        :duration="1"
        separator=","
        decimalSeparator="."
        :autoinit="true"
        class="text-4xl font-bold"
      />
    </div>
  </main>
  <footer class="absolute px-4 bottom-2 w-full font-semibold text-center">
    27348 people booping
  </footer>
</template>

<style>
@import './assets/base.css';
</style>
