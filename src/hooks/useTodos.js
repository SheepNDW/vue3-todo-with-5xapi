import { ref } from 'vue'

export default function useTodos() {
  const todos = ref([])
  const addTodo = (todo) => todos.value.push(todo)
  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return {
    todos,
    addTodo,
    deleteTodo
  }
}
