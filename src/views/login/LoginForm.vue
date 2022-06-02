<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn, signUp } from '@/api/users'
import Message from '@/components/toast-message/Message'

const router = useRouter()

const isLogin = ref(true)
const switchMode = () => {
  isLogin.value = !isLogin.value
}

const { signUpInfo, handleSignUp } = useSignUp()
const { loginInfo, handleSignIn } = useSignIn()

function useSignUp() {
  const signUpInfo = reactive({
    email: '',
    nickname: '',
    password: ''
  })

  const handleSignUp = async () => {
    if (
      signUpInfo.password.length < 6 ||
      signUpInfo.password.indexOf(' ') !== -1
    ) {
      return Message({ type: 'warn', text: '密碼不得有空格或少於 6 個字元' })
    }

    try {
      const data = await signUp(signUpInfo)
      Message({ type: 'success', text: data.message })

      // 清空表單並切換至登入模式
      signUpInfo.email = ''
      signUpInfo.nickname = ''
      signUpInfo.password = ''
      isLogin.value = true
    } catch (err) {
      Message({ type: 'error', text: err.response.data.error[0] })
    }
  }

  return {
    signUpInfo,
    handleSignUp
  }
}

function useSignIn() {
  const loginInfo = reactive({
    email: '',
    password: ''
  })

  const handleSignIn = async () => {
    try {
      const res = await signIn(loginInfo)
      const token = res.headers.authorization
      localStorage.setItem('5xcampTodo', token)
      router.push('/')
      Message({ type: 'success', text: '歡迎回來!' })
    } catch (err) {
      Message({ text: '帳號或密碼錯誤!' })
    }
  }

  return {
    loginInfo,
    handleSignIn
  }
}
</script>

<template>
  <h2 class="font-bold text-3xl text-gray-800" v-if="isLogin">歡迎回來</h2>
  <h2 class="font-bold text-3xl text-gray-800" v-else>註冊帳號</h2>
  <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
    <span class="h-[1px] w-16 bg-gray-200"></span>
    <span v-if="isLogin">使用者登入</span>
    <span v-else>填寫資料</span>
    <span class="h-[1px] w-16 bg-gray-200"></span>
  </div>
  <template v-if="isLogin">
    <form class="form w-[250px]" @submit.prevent="handleSignIn">
      <div class="form__group text-gray-400">
        <input
          type="email"
          class="form__input"
          placeholder="Email address"
          id="email"
          required
          v-model="loginInfo.email"
        />
        <label for="email" class="form__label">Email address</label>
      </div>
      <div class="form__group text-gray-400">
        <input
          type="password"
          class="form__input"
          placeholder="Password"
          id="password"
          required
          v-model="loginInfo.password"
        />
        <label for="password" class="form__label">Password</label>
      </div>
      <div class="form__group flex flex-col justify-center items-center">
        <button class="form__btn">登入</button>
        <span class="cursor-pointer" @click="switchMode">註冊帳號</span>
      </div>
    </form>
  </template>

  <template v-else>
    <form class="form w-[250px]" @submit.prevent="handleSignUp">
      <div class="form__group text-gray-400">
        <input
          type="email"
          class="form__input"
          placeholder="Email address"
          id="email"
          required
          v-model="signUpInfo.email"
        />
        <label for="email" class="form__label">Email address</label>
      </div>
      <div class="form__group text-gray-400">
        <input
          type="text"
          class="form__input"
          placeholder="Nickname"
          id="nickname"
          required
          v-model="signUpInfo.nickname"
        />
        <label for="nickname" class="form__label">Nickname</label>
      </div>
      <div class="form__group text-gray-400">
        <input
          type="password"
          class="form__input"
          placeholder="Password"
          id="password"
          required
          v-model="signUpInfo.password"
        />
        <label for="password" class="form__label">Password</label>
      </div>
      <div class="form__group flex flex-col justify-center items-center">
        <button class="form__btn">註冊帳號</button>
        <span class="cursor-pointer" @click="switchMode">登入</span>
      </div>
    </form>
  </template>
</template>

<style lang="scss" scoped>
.form {
  &__group {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__input {
    @apply w-full text-lg px-2 py-4 border-none outline-none rounded bg-light-300 placeholder-gray-300;
    @apply transition-all duration-300 focus:(shadow-lg);

    border-bottom: 3px solid transparent;

    &:focus {
      border-bottom: 3px solid #10b981;
    }

    &:focus:invalid {
      border-bottom: 3px solid #f97316;
    }
  }

  &__label {
    font-size: 1rem;
    font-weight: 700;
    margin-left: 1rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  &__input:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-3rem);
  }

  &__btn {
    @apply px-12 py-3 mb-4 text-light-50 bg-blue-500 rounded-md cursor-pointer;
    @apply transition-all duration-200 hover:(bg-blue-400) focus:(ring-4 ring-blue-300);
  }
}
</style>
