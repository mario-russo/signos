<template>
  <div class="p-5">
    <section class="grid caixa">
      <section class="anuncio shadow"><h1>anuncio</h1></section>
      <div class="max-w-4xl mx-auto py-8 px-5 shadow conteudo">
        <h2 class="text-xl font-semibold mb-4">
          Caracteristicas do signo de {{ signo?.nomeImage }}
        </h2>
        <p>{{ signo?.data }}</p>

        <p
          class="text-gray-700 leading-relaxed"
          v-for="caracteristica in signo?.caracteristicas"
        >
          {{ caracteristica }}
        </p>
      </div>
      <div class="anuncio shadow">
        <h2>Seção de Anúncio</h2>
        <p>Anúncio aqui.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { signoStore } from "~/stores/signoStore";

const { nome } = useRoute().params;
const id = parseInt(nome.toString());
const signo = signoStore().getBySignoId(id);

onMounted(() => {});
</script>

<style scoped>
@import url("~/assets/css/tamanhoFonte.css");
.caixa {
  /* background-color: beige; */
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  min-height: 80vh;
}
.conteudo p {
  font-size: 1.6rem;
}
.anuncio {
  display: none;
}
@media (max-width: 800px) {
  .caixa {
    flex-direction: column;
  }
  .conteudo p {
    font-size: 1.3rem;
  }
  .conteudo {
    width: 100%;
  }
}
@media (max-width: 500px) {
  .conteudo p {
    font-size: 1.1rem;
  }
}
</style>
