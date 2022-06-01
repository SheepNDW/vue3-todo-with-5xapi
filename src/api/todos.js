import request from '@/utils/request'

/**
 * 取得代辦清單
 * @returns Promise
 */
export const getTodos = () => {
  return request('/todos', 'get')
}

/**
 * 新增一個代辦事項
 * @param {Object} todo - 欲新增的代辦事項
 * @returns Promise
 */
export const createTodo = (todo) => {
  return request('/todos', 'post', { todo })
}

/**
 * 完成 / 未完成切換
 * @param {String} id - todoId
 * @returns Promise
 */
export const changeTodoStatus = (id) => {
  return request(`/todos/${id}/toggle`, 'patch')
}

/**
 * 修改代辦事項
 * @param {String} id - todoId
 * @param {String} content - 修改後的內容
 * @returns Promise
 */
export const changeTodoContent = (id, content) => {
  return request(`/todos/${id}`, 'put', { todo: { content } })
}

/**
 * 刪除一個代辦事項
 * @param {String} id - todoId
 * @returns Promise
 */
export const removeTodo = (id) => {
  return request(`/todos/${id}`, 'delete')
}
