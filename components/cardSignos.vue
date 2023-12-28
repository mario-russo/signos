<template>
  <div class="container-main">
    <div class="text-center">
      <section class="grid-card">
        <section
          v-for="signo in signos"
          :key="signo.id"
          class="shadow p-2 card"
          @click=""
        >
          <h5>{{ signo.nomeImage }}</h5>
          <p class="mb-5">{{ signo.data }}</p>
          <NuxtLink
            class="cursor-pointer text-white bg-teal-400 font-bold shadow py-1 px-8 mb-5 rounded"
            @click="props.rota(signo.id)"
            >Ver</NuxtLink
          >
        </section>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signoStore } from "~/stores/signoStore";

const storeSigno = signoStore();

const signos = storeSigno.signos;
const props = defineProps({ rota: { type: Function, default: () => {} } });

onMounted(() => {});
</script>

<style scoped>
@import url("~/assets/css/tamanhoFonte.css");
.container-main {
  min-height: 83vh;
  padding-top: 100px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.grid-card {
  width: 50%;
  gap: 5px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 32%);
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 800px) {
  .grid-card {
    width: 99%;
  }
}

@media screen and (max-width: 600px) {
  .grid-card {
    width: 100%;
    grid-template-columns: repeat(2, 48%);
  }
}
/*
@media screen and (max-width: 800px) {
  .card-main {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: auto;
  }
  .card-main section {
    width: 300px;
  }
}  */
</style>
