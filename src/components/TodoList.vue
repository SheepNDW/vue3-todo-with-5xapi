<script setup>
import TodoListITem from './TodoListITem.vue'

defineProps({
  todos: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="grid gap-y-3.5">
    <TodoListITem
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="todo.completed = $event.target.checked"
    />
  </div>
</template>
