<template>
  <div class="">
    <div v-if="pending">
      <LoadingComponent></LoadingComponent>
    </div>
    <noticiaSignosComponent
      v-else
      :signo="busca.signo"
      :conteudo="busca.conteudo"
      :titulo="`Horóscopo da Semana ${signo?.nome}`"
    ></noticiaSignosComponent>
  </div>
</template>

<script setup lang="ts">
import { useSignos } from "~/composables/useSignos";

const { name } = useRoute().params;
const dataInfo = useObterData();

const signo = useSignos().getSigno.value("nameParms", name);

const apiBusca = reactive({
  referencia: dataInfo.getWeekNumber(),
  signo: signo?.enum,
  tipo: "SEMANA",
});

const { data: busca, pending } = useFetch(
  `${useRuntimeConfig().public.baseUrl}conteudo/busca-tudo`,
  {
    method: "POST",
    body: JSON.stringify(apiBusca),
    headers: {
      "Content-Type": "application/json",
    },
    lazy: false,
  }
);
</script>

<style scoped>
.page {
  min-height: 80vh;
}
</style>
