<script setup>
import { inject, nextTick, ref } from 'vue'
import Message from './toast-message/Message'

defineProps({
  todoItem: {
    type: Object,
    default: () => ({})
  }
})

const { deleteTodo } = inject('deleteTodo')
const { updateTodo } = inject('updateTodo')

const handleDelete = (id) => {
  deleteTodo(id)
}

const inputRef = ref(null)
const handleEdit = (todoItem) => {
  todoItem.isEdit = true
  nextTick(() => inputRef.value.focus())
}

const handleBlur = (todoItem, e) => {
  todoItem.isEdit = false
  if (!e.target.value.trim()) {
    return Message({ type: 'warn', text: '內容不得為空!' })
  }

  if (todoItem.content === e.target.value) return
  updateTodo(todoItem.id, e.target.value)
}
</script>

<template>
  <div class="todo-item" :class="{ done: todoItem.completed_at }">
    <label class="relative flex items-center mr-auto">
      <input
        class="todo-item__checkbox"
        type="checkbox"
        :checked="todoItem.completed_at"
        @click="$emit('change-state', $event)"
      />
      <span class="todo-item__check-button"></span>
      <span v-show="!todoItem.isEdit">{{ todoItem.content }}</span>
      <input
        v-show="todoItem.isEdit"
        type="text"
        :value="todoItem.content"
        @blur="handleBlur(todoItem, $event)"
        ref="inputRef"
      />
    </label>

    <i
      v-show="!todoItem.isEdit"
      class="material-icons-outlined todo-item__icon mr-2"
      @click="handleEdit(todoItem)"
      >edit</i
    >
    <i
      class="material-icons-outlined todo-item__icon"
      @click="handleDelete(todoItem.id)"
      >delete</i
    >
  </div>
</template>

<style lang="scss" scoped>
.todo-item {
  @apply flex items-center p-4 text-[#626262] rounded-lg bg-white;

  &__checkbox {
    margin-right: 1rem;
    opacity: 0;
  }

  &__check-button {
    position: absolute;
    margin: auto 0;
    width: 18px;
    height: 18px;
  }

  &__check-button::before,
  &__check-button::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }

  &__check-button::before {
    border: 1px solid #b382f9;
  }

  &__check-button::after {
    transition: 0.4s;
    background: #b382f9;
    transform: scale(0.8);
    opacity: 0;
  }

  &__checkbox:checked + &__check-button::after {
    opacity: 1;
  }

  &__icon {
    font-size: 1rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover &__icon {
    opacity: 1;
  }
}

.done label {
  text-decoration: line-through;
  font-style: italic;
}
</style>
