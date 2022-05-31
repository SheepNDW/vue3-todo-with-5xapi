<script setup>
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <main
    class="w-[100vw] min-h-[100vh] flex justify-center items-center bg-violet-100"
  >
    <div class="container">
      <h1 class="mx-0 my-6 text-[28px] text-[#414873]">Vue3 Todo App</h1>
      <TodoAdd />

      <TodoFilter />

      <TodoList />
    </div>
  </main>
</template>

<style lang="scss">
* {
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Arial', 'Helvetica',
    sans-serif;
}

.container {
  @apply w-[60%] max-w-[400px] px-12 py-7 rounded-[1.5rem];
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  background-color: #f5f6fc;
}
</style>
