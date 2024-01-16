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
    <div class="container">
      <form action="">
        <input class="name" type="text" placeholder="Nome" name="name" />
        <input
          class="email"
          type="email"
          placeholder="La tua email"
          name="email"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Scrivi il tuo messaggio"
        ></textarea>
        <input class="btn" type="submit" value="Invia" />
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 0px;

  h1 {
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .btn {
      align-self: center;
      padding: 10px 15px;
      border-radius: 15px;
      border: none;
      background-color: red;
      color: white;
    }

    .name {
      line-height: 2em;
    }

    .email {
      line-height: 2em;
    }
  }
}
</style>
