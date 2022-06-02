import { createVNode, render } from 'vue'
import Toast from './Toast.vue'

const div = document.createElement('div')
div.setAttribute('class', 'toast-message-container')
document.body.appendChild(div)

let timer = null

/**
 * 顯示提示訊息
 * @param {Object} toast - 接收 type 和 text
 * @param {String} toast.type - warn 警告(默認)  error 錯誤  success 成功
 * @param {String} toast.text - 提示訊息
 */
const Message = ({ type, text }) => {
  const vnode = createVNode(Toast, { type, text })
  render(vnode, div)

  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
  }, 2000)
}

export default Message
