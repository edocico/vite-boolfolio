<script>
export default {
  data() {
    return {
      title: "Questa è la home page",
    };
  },
};
</script>

<template>
  <section class="home">
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
  padding: 30px 0px;
}
</style>
