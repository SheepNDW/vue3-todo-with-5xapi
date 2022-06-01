import { createRouter, createWebHashHistory } from 'vue-router'

const Index = () => import('@/views/Index.vue')
const Login = () => import('@/views/login/Login.vue')

const routes = [
  {
    path: '/',
    component: Index,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('5xcampTodo')
      if (!token) return next('/login')
      next()
    }
  },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
