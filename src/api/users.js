import request from '@/utils/request'
import axios from 'axios'

/**
 * 帳號註冊
 * @param {Object} userData - 使用者註冊資訊 (email, nickname, password)
 * @returns Promise
 */
export const signUp = (userData) => {
  return request('/users', 'post', { user: userData })
}

/**
 * 使用者登入
 * @param {Object} userData - 使用者登入資訊 (email, password)
 * @returns Promise
 */
export const signIn = (userData) => {
  return axios.post('https://todoo.5xcamp.us/users/sign_in', { user: userData })
}

/**
 * 使用者登出
 * @returns Promise
 */
export const signOut = () => {
  return request('/users/sign_out', 'delete')
}

/**
 * 登入權限測試
 * @returns Promise
 */
export const checkAuth = () => {
  return request('/check', 'get')
}
