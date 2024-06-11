<template>
  <!-- form -->
  <div class="new-task-form">
    <TaskForm />
  </div>

  <!-- filter -->
  <nav class="filter">
    <button @click="filter = 'all'">All tasks</button>
    <button @click="filter = 'fav'">Fav tasks</button>
    <button @click="taskStore.$reset">Reset State</button>
  </nav>

  <!-- loading -->
  <div class="loading" v-if="loading">Loading tasks...</div>

  <div class="task-list" v-if="filter === 'all'">
    <p>You have {{ totalCount }} tasks left to do</p>
    <div v-for="task in tasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>

  <div class="task-list" v-if="filter === 'fav'">
    <p>You have {{ favCount }} favs left to do</p>
    <div v-for="task in favs" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../../stores/TaskStore';
import TaskForm from '../TaskForm/TaskForm.vue';
import TaskDetails from '../TaskDetails/TaskDetails.vue';
import { storeToRefs } from 'pinia';
const taskStore = useTaskStore();
const filter = ref('all');

const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore);

// fetch data
taskStore.getTasks();
</script>
