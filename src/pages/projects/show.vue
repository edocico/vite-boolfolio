<script>
import axios from "axios";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000/api",
      project: null,
    };
  },
  methods: {
    fetchProject() {
      axios.get(`${this.baseUrl}/projects/${this.id}`).then((res) => {
        this.project = res.data.project;
        console.log(this.project);
      });
    },
  },
  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <section v-if="project">
    <div class="container">
      <h1>{{ project.name }}</h1>
      <p v-if="project.type">{{ project.type.name }}</p>
      <p>{{ project.description }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
