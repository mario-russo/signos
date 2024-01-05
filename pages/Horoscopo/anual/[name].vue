<template>
  <div>
    <NoticiaSignosComponent
      :buscaDto="buscaDto"
      :titulo="`Horóscopo do Ano ${signo?.nome}`"
    />
  </div>
</template>
<script setup lang="ts">
import { useSignos } from "~/composables/useSignos";
const { name } = useRoute().params;

const dataInfo = useObterData();

const signo = useSignos().getSigno.value("nameParms", name);

const buscaDto = reactive<apiBuscaSignoTipoReferencia>({
  referencia: dataInfo.getYear(),
  tipo: "ANO",
  signo: signo?.enum,
});
</script>

<style scoped></style>
