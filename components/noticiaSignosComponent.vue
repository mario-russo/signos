<template>
  <div class="caixa">
    <section class="grid">
      <div class="anuncio"></div>
      <div class="conteudo">
        <div class="">
          <h1 class="">{{ props.titulo }}</h1>
        </div>
        <p>{{ conteudo.signo }}</p>
        <p>{{ conteudo.conteudo }}</p>
      </div>
      <div class="anuncio"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  buscaDto: { type: Object },
  titulo: { type: String },
});

const { data: conteudo } = useFetch<backend>(
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
.caixa {
  min-height: 85vh;
  font-size: 1.4rem;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
}
.caixa h1 {
  font-size: 1.8rem !important;
  font-weight: 600;
  margin-bottom: 2rem;
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
  width: 50%;
  flex-direction: column;
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
