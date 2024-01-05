<template>
  <div class="caixa">
    <section class="grid">
      <div class="anuncio"></div>
      <main class="conteudo">
        <header class="">
          <h1 class="text-center mb-5">{{ props.titulo }}</h1>
        </header>
        <section v-html="signo.signo"></section>
        <section v-html="signo.conteudo"></section>
      </main>
      <div class="anuncio"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  buscaDto: { type: Object },
  titulo: { type: String },
});

const { data: signo } = useFetch<backend | any>(
  `${useRuntimeConfig().public.baseUrl}conteudo/busca-tudo`,
  {
    method: "POST",
    body: JSON.stringify(props.buscaDto),
    headers: {
      "Content-Type": "application/json",
    },
  }
);
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
.conteudo p {
  line-height: 1.7rem;
  margin: 1rem 0;
  text-align: justify;
}
.conteudo h2 {
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
