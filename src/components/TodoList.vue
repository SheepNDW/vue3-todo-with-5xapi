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
    <transition-group name="list" appear>
      <TodoListITem
        v-for="todo in todos"
        :key="todo.id"
        :todo-item="todo"
        @change-state="changeState(todo, $event)"
      />
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.4s ease;
  }

  &-leave-active {
    position: absolute;
  }

  &-move {
    transition: all 0.3s ease;
  }
}
</style>
