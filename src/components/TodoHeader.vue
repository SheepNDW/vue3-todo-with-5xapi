<script setup>
import { useRouter } from 'vue-router'
import { signOut } from '@/api/users'

const router = useRouter()
const handleSignOut = async () => {
  await signOut()
  localStorage.removeItem('5xcampTodo')
  router.push('/login')
}
</script>

<template>
  <div class="flex items-center">
    <h1 class="mr-auto my-6 text-[28px] text-[#414873]">Vue3 Todo App</h1>
    <button class="sign-out-btn" @click="handleSignOut">登出</button>
  </div>
</template>

<style lang="scss" scoped>
.sign-out-btn {
  @apply px-3 py-1 text-sm text-light-50 bg-purple-300 rounded-full cursor-pointer;
  @apply transition-all duration-300 hover:(bg-purple-400) focus:(ring-3 ring-purple-200);
}
</style>
