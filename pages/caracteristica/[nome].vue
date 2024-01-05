<template>
  <div class="p-5">
    <section class="grid caixa">
      <div class="max-w-4xl mx-auto py-8 px-5 conteudo">
        <h2 class="text-xl font-semibold mb-4">
          Caracteristicas do Signo de {{ signo?.nomeImage }}
        </h2>
        <p>{{ signo?.data }}</p>

        <p
          class="text-gray-700 leading-relaxed"
          v-for="caracteristica in signo?.caracteristicas"
        >
          {{ caracteristica }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { signoStore } from "~/stores/signoStore";

const { nome } = useRoute().params;
const signo = signoStore().nome(nome);

onMounted(() => {});
</script>

<style scoped>
@import url("~/assets/css/tamanhoFonte.css");
.caixa {
  display: flex;
  flex-direction: row;
  margin-top: 7%;
  min-height: 80vh;
}
.conteudo p {
  font-size: 1.6rem;
}
.anuncio {
  display: block;
  padding: 5px;
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
