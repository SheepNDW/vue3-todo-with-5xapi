<script setup>
import TodoListITem from './TodoListITem.vue'
</script>

<template>
  <div class="grid gap-y-3.5">
    <TodoListITem v-for="n in 3" :key="n" />
  </div>
</template>
