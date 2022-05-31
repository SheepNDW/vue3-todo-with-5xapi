<script setup></script>

<template>
  <div class="relative flex items-center">
    <input type="text" name="todo" class="add-input" />
    <button class="add-btn">
      <i class="add-btn__plus"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.add-input {
  @apply w-full text-base text-[#626262] py-4 pr-13 pl-[1.125rem] pb-[1.125rem] rounded-[3rem] border-none outline-none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
}

.add-btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;

  color: white;
  position: absolute;
  right: 0px;

  cursor: pointer;

  &__plus {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
    background-size: 50% 2px, 2px 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
