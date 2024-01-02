<template>
  <div>
    <noticiaSignosComponent
      :busca-dto="apiBusca"
      titulo="Horóscopo da Semana"
    ></noticiaSignosComponent>
  </div>
</template>

<script setup lang="ts">
import { signos } from "~/utils/domain/signosArray";

const { id } = useRoute().params;
const dataInfo = useObterData();

const enumSigno = signos.find(
  (item) => item.id === parseInt(id.toString())
)?.enum;

const apiBusca: apiBuscaSignoTipoReferencia =
  reactive<apiBuscaSignoTipoReferencia>({
    referencia: dataInfo.getWeekNumber(),
    signo: enumSigno,
    tipo: "SEMANA",
  });

onMounted(async () => {});
</script>

<style scoped></style>
