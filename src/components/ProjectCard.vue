<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    item: {
      type: Object,
    },
  },
  components: { RouterLink },
};
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h3>{{ item.name }}</h3>
      <p v-if="item.type">{{ item.type.name }}</p>
    </div>
    <div class="card-body">
      <!-- <p>{{ item.description }}</p> -->
      <RouterLink
        :to="{ name: 'project.show', params: { id: item.id } }"
        class="btn"
        >Vedi Progetto</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 10px 10px;
  border: 1px solid black;
  background-color: lightgrey;
  border-radius: 15px;

  .card-header {
    border-bottom: 1px solid black;
    padding: 10px;
  }

  .card-body {
    padding: 10px;

    .btn {
      line-height: 2em;
      background-color: red;
      padding: 5px 10px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
