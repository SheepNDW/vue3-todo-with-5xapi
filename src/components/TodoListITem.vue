<script setup>
import { inject } from 'vue'

defineProps({
  todoItem: {
    type: Object,
    default: () => ({})
  }
})

const { deleteTodo } = inject('deleteTodo')

const handleDelete = (id) => {
  deleteTodo(id)
}
</script>

<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label class="relative flex items-center mr-auto">
      <input
        class="todo-item__checkbox"
        type="checkbox"
        :checked="todoItem.completed"
        @click="$emit('change-state', $event)"
      />
      <span class="todo-item__check-button"></span>
      <span>{{ todoItem.content }}</span>
    </label>

    <i class="material-icons-outlined todo-item__icon mr-2">edit</i>
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
