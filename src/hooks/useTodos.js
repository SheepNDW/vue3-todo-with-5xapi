import { ref } from 'vue'
import {
  changeTodoContent,
  changeTodoStatus,
  createTodo,
  getTodos,
  removeTodo
} from '@/api/todos'

export default function useTodos() {
  const todos = ref([])

  const addTodo = async (todo) => {
    await createTodo(todo)
    getTodoList()
  }

  const deleteTodo = async (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
    await removeTodo(id)
  }

  const updateTodo = async (id, content) => {
    todos.value.forEach((todo) => {
      if (todo.id === id) todo.content = content
    })

    await changeTodoContent(id, content)
  }

  const toggleTodo = async (id) => {
    await changeTodoStatus(id)
  }

  const getTodoList = async () => {
    const { todos: todoList } = await getTodos()
    todos.value = todoList
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleTodo,
    getTodoList
  }
}
