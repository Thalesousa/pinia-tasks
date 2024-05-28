<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"
        >delete</i
      >
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toogleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/TaskStore';
const taskStore = useTaskStore();

const props = defineProps({
  task: Object,
});
</script>
