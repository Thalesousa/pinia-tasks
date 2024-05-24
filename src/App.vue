<template>
  <main>
    <!-- heading -->
    <header>
      <img src="/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <TaskList />
  </main>
</template>

<script setup>
import TaskList from './components/TaskList/TaskList.vue';
</script>
