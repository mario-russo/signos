<template>
  <div>
    <noticiaSignosComponent
      :busca-dto="apiBusca"
      :titulo="`Horóscopo da Semana ${signo?.nome}`"
    ></noticiaSignosComponent>
  </div>
</template>

<script setup lang="ts">
import { useSignos } from "~/composables/useSignos";

const { name } = useRoute().params;
const dataInfo = useObterData();

const signo = useSignos().getSigno.value("nameParms", name);

const apiBusca: apiBuscaSignoTipoReferencia =
  reactive<apiBuscaSignoTipoReferencia>({
    referencia: dataInfo.getWeekNumber(),
    signo: signo?.enum,
    tipo: "SEMANA",
  });

onMounted(async () => {});
</script>

<style scoped></style>
