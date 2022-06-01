<script setup>
import { provide } from 'vue'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoAdd from '@/components/TodoAdd.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoList from '@/components/TodoList.vue'
import useFilteredTodos from '@/hooks/useFilteredTodos'
import useTodos from '@/hooks/useTodos'
import useCheckAuth from '@/hooks/useCheckAuth'

const { todos, addTodo, deleteTodo, updateTodo, getTodoList } = useTodos()
const { filter, filteredTodos } = useFilteredTodos(todos)
const { checkSuccess, checkLogin } = useCheckAuth()

provide('deleteTodo', { deleteTodo })
provide('updateTodo', { updateTodo })

// 初始化頁面
checkLogin()
getTodoList()
</script>

<template>
  <main
    class="w-[100vw] min-h-[100vh] flex justify-center items-center bg-violet-100"
    v-if="checkSuccess"
  >
    <div class="container">
      <TodoHeader />
      <TodoAdd @add-todo="addTodo" />
      <TodoFilter :selected="filter" @change-filter="filter = $event" />
      <TodoList :todos="filteredTodos" />
    </div>
  </main>
</template>

<style lang="scss">
* {
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Arial', 'Helvetica',
    sans-serif;
}

.container {
  @apply md:w-[60%] w-[85%] max-w-[400px] sm:px-12 px-8 py-7 rounded-[1.5rem] bg-[#f5f6fc];
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
}
</style>
