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
      <nav class="navbar">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </li>
          <li>
            <RouterLink :to="{ name: 'projects.index' }">Progetti</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'AppContacts' }">Contatti</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0px;

  .navbar {
    display: flex;
    justify-content: center;

    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
  }
}

.header {
  border-bottom: 1px solid black;
}
</style>
