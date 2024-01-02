<template>
  <div>
    <NoticiaSignosComponent :buscaDto="buscaDto" titulo="Horóscopo do Ano" />
  </div>
</template>

<script setup lang="ts">
import { signos } from "~/utils/domain/signosArray";

const { id } = useRoute().params;

const dataInfo = useObterData();

const enumSigno = signos.find((item) => {
  return item.id === parseInt(id.toString());
})?.enum;

const buscaDto = reactive<apiBuscaSignoTipoReferencia>({
  referencia: dataInfo.getYear(),
  tipo: "ANO",
  signo: enumSigno,
});
</script>

<style scoped></style>
