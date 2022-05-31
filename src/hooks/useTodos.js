import { ref } from 'vue'

export default function useTodos() {
  const todos = ref([])
  const addTodo = (todo) => todos.value.push(todo)
  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }
  const updateTodo = (id, content) => {
    todos.value.forEach((todo) => {
      if (todo.id === id) todo.content = content
    })
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo
  }
}
