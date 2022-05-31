<script setup>
import LoginForm from './LoginForm.vue'
</script>

<template>
  <main class="grid grid-cols-12 min-h-screen bg-indigo-500">
    <div class="col-span-8 flex items-center justify-center flex-col">
      <h1>
        <div class="font-bold text-5xl text-light-50 mb-4">WELCOME!</div>
        <div class="text-gray-200 text-lg">
          ONLINE TODO LIST - 最實用的線上代辦事項服務
        </div>
      </h1>
    </div>
    <div
      class="col-span-4 bg-light-50 flex items-center justify-center flex-col"
    >
      <LoginForm />
    </div>
  </main>
</template>
