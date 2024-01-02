<template>
  <div>
    <noticiaSignosComponent :busca-dto="buscaSigno" titulo="Horóscopo Do Mês" />
  </div>
</template>

<script setup lang="ts">
import { signos } from "~/utils/domain/signosArray";

const { id } = useRoute().params;
const dataInfo = useObterData();

const enumSigno = signos.find(
  (item) => item.id === parseInt(id.toString())
)?.enum;

const buscaSigno = reactive<apiBuscaSignoTipoReferencia>({
  referencia: dataInfo.getMonthNumber(),
  tipo: "MES",
  signo: enumSigno,
});
</script>
<style scoped></style>
