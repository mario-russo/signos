<template>
  <div>
    <noticiaSignosComponent
      :busca-dto="buscaSigno"
      :titulo="`Horóscopo Do Mês de ${signo?.nome}`"
    />
  </div>
</template>

<script setup lang="ts">
import { useSignos } from "~/composables/useSignos";
const { name } = useRoute().params;
const dataInfo = useObterData();

const signo = useSignos().getSigno.value("nameParms", name);

const buscaSigno = reactive<apiBuscaSignoTipoReferencia>({
  referencia: dataInfo.getMonthNumber(),
  tipo: "MES",
  signo: signo?.enum,
});
</script>
<style scoped></style>
