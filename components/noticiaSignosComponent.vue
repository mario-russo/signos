<template>
  <div class="caixa">
    <section class="grid">
      <div class="anuncio"></div>
      <main class="conteudo">
        <header class="mb-10">
          <h1 class="">{{ tituloDaPage }}</h1>
        </header>
        <section v-for="conteudo in semana?.conteudo" :key="conteudo.titulo">
          <h2 class="">{{ conteudo.titulo }}</h2>
          <p class="">{{ conteudo.conteudo }}</p>
        </section>
      </main>
      <div class="anuncio"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { typeSemana } from "~/pages/Horoscopo/semanal/dados/types";
const props = defineProps({
  semana: {
    type: Object as () => typeSemana,
  },
  tituloDaPage: { type: String },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import url("~/assets/css/tamanhoFonte.css");
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.caixa {
  min-height: 85vh;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
}
.grid {
  padding-top: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.conteudo {
  padding: 20px;
  display: flex;
  width: 60%;
  flex-direction: column;
}
.conteudo section p {
  line-height: 1.7rem;
  margin: 1.2rem 0;
  text-align: justify;
}
.conteudo section h2 {
  font-weight: 500;
}
.anuncio {
  padding: 20px;
  width: 10%;
  display: flex;
  flex-direction: column;
}
@media (max-width: 800px) {
  .grid {
    padding-top: 7%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .anuncio {
    width: 100%;
  }
  .conteudo {
    width: 100%;
  }
}
</style>
