import { ref } from 'vue'
import {
  changeTodoContent,
  changeTodoStatus,
  createTodo,
  getTodos,
  removeTodo
} from '@/api/todos'
import Message from '@/components/toast-message/Message'

export default function useTodos() {
  const todos = ref([])

  const addTodo = async (todo) => {
    await createTodo(todo)
    Message({ type: 'success', text: '新增成功!' })
    getTodoList()
  }

  const deleteTodo = async (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
    await removeTodo(id)
    Message({ type: 'success', text: '刪除成功!' })
  }

  const updateTodo = async (id, content) => {
    todos.value.forEach((todo) => {
      if (todo.id === id) todo.content = content
    })

    await changeTodoContent(id, content)
    Message({ type: 'success', text: '修改成功!' })
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
