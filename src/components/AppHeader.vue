<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section class="header">
    <div class="container">
      <div>home</div>
      <div>portfolio</div>
      <div>contatti</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
