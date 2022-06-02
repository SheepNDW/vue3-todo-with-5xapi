<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'warn'
  },
  text: {
    type: String,
    default: ''
  }
})

const style = {
  warn: {
    icon: 'error',
    color: '#E6A23C',
    borderLeft: '8px solid #E6A23C'
  },
  error: {
    icon: 'cancel',
    color: '#F56C6C',
    borderLeft: '8px solid #F56C6C'
  },
  success: {
    icon: 'check_circle',
    color: '#67C23A',
    borderLeft: '8px solid #67C23A'
  }
}

const isVisible = ref(false)
onMounted(() => (isVisible.value = true))
</script>

<template>
  <transition name="down">
    <div class="toast-message" :style="style[type]" v-show="isVisible">
      <i class="material-icons-round toast-message__icon">
        {{ style[type].icon }}
      </i>
      <span class="toast-message__text">{{ text }}</span>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.toast-message {
  position: fixed;
  top: 35px;
  left: 50%;
  margin-left: -150px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 60px;
  padding: 0 16px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 7px;
  font-size: 1rem;

  &__icon {
    color: inherit;
    font-size: 1.5rem;
  }

  &__text {
    color: #414873;
    font-size: inherit;
    margin-left: 0.5rem;
  }
}

.down {
  &-enter-from {
    transform: translateY(-95px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.5s;
  }

  &-enter-to {
    transform: none;
    opacity: 1;
  }
}
</style>
