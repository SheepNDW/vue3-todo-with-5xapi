<script setup>
import TodoListITem from './TodoListITem.vue'
import useTodos from '@/hooks/useTodos'

defineProps({
  todos: {
    type: Array,
    default: () => []
  }
})

const { toggleTodo } = useTodos()

const changeState = (todo, e) => {
  todo.completed_at = e.target.checked
  toggleTodo(todo.id)
}
</script>

<template>
  <div class="grid gap-y-3.5">
    <TodoListITem
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
      @change-state="changeState(todo, $event)"
    />
  </div>
</template>
