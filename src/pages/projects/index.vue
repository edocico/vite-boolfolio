<script>
import axios from "axios";
export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/api",
    };
  },
  methods: {
    fetchprojects() {
      axios.get(`${this.baseUrl}/projects`).then((res) => {
        console.log(res);
      });
    },
  },
  created() {
    this.fetchprojects();
  },
};
</script>

<template>
  <div>
    <div class="container">
      <h1>Projects</h1>
    </div>
    <div class="container">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>
          {{ project.name }}
        </h3>
        <p>
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
