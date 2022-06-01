import axios from 'axios'

const baseURL = 'https://todoo.5xcamp.us'

const instance = axios.create({
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('5xcampTodo')
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

function request(url, method, submitData) {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
