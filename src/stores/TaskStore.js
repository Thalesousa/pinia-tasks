import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false,
  }),

  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav);
    },

    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },

    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      try {
        const res = await fetch('http://localhost:3000/tasks');
        const data = await res.json();
        this.tasks = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async addTask(task) {
      try {
        await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          body: JSON.stringify(task),
          headers: { 'Content-Type': 'application/json' },
        });
        this.tasks.push(task);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(id) {
      try {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        await fetch('http://localhost:3000/tasks/' + id, {
          method: 'DELETE',
        });
      } catch (error) {
        console.log(error);
      }
    },

    async toogleFav(id) {
      try {
        const task = this.tasks.find((t) => t.id === id);
        task.isFav = !task.isFav;
        await fetch('http://localhost:3000/tasks/' + id, {
          method: 'PATCH',
          body: JSON.stringify({ isFav: task.isFav }),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
