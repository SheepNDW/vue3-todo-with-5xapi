<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const switchMode = () => {
  isLogin.value = !isLogin.value
}
</script>

<template>
  <h2 class="font-bold text-3xl text-gray-800">歡迎回來</h2>
  <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
    <span class="h-[1px] w-16 bg-gray-200"></span>
    <span>使用者登入</span>
    <span class="h-[1px] w-16 bg-gray-200"></span>
  </div>
  <form class="form w-[250px]">
    <div class="form__group text-gray-400">
      <input
        type="email"
        class="form__input"
        placeholder="Email address"
        id="email"
        required
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
      />
      <label for="password" class="form__label">Password</label>
    </div>
    <div class="form__group flex flex-col justify-center items-center">
      <button class="form__btn" v-if="isLogin">登入</button>
      <button class="form__btn" v-else>註冊帳號</button>
      <!-- prettier-ignore -->
      <span class="cursor-pointer" @click="switchMode" v-if="isLogin">註冊帳號</span>
      <span class="cursor-pointer" @click="switchMode" v-else> 登入 </span>
    </div>
  </form>
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
