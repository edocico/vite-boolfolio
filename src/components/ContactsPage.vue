<script>
export default {
  data() {
    return {
      title: "pagina contatti",
    };
  },
};
</script>

<template>
  <section class="contacts">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
</style>
