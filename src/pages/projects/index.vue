<script>
import axios from "axios";
import ProjectCard from "../../components/ProjectCard.vue";
export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/api",
    };
  },
  components: {
    ProjectCard,
  },
  methods: {
    fetchprojects() {
      axios.get(`${this.baseUrl}/projects`).then((res) => {
        console.log(res);
        this.projects = res.data.results.data;
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
    <div class="container-title">
      <h1>Projects</h1>
    </div>
    <div class="container" v-if="this.projects.length > 0">
      <ProjectCard
        v-for="(project, index) in this.projects"
        :key="index"
        :item="project"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.container-title {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    text-align: center;
  }
}
</style>
