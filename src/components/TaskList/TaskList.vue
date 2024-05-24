<template>
  <!-- task list -->

  <!-- filter -->

  <nav class="filter">
    <button @click="filter = 'all'">All tasks</button>
    <button @click="filter = 'fav'">Fav tasks</button>
  </nav>

  <div class="task-list" v-if="filter === 'all'">
    <p>You have {{ taskStore.totalCount }} tasks left to do</p>
    <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>

  <div class="task-list" v-if="filter === 'fav'">
    <p>You have {{ taskStore.favCount }} favs left to do</p>
    <div v-for="task in taskStore.favs" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TaskDetails from '../TaskDetails/TaskDetails.vue';
import { useTaskStore } from '../../stores/TaskStore';
const taskStore = useTaskStore();
const filter = ref('all');
</script>
