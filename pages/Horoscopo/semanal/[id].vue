<template>
  <div>
    <noticiaSignosComponent :busca-dto="apiBusca"></noticiaSignosComponent>
  </div>
</template>

<script setup lang="ts">
import { signos } from "~/utils/domain/signosArray";

const { id } = useRoute().params;
const dataAtual = new Date();
const semanaDoAno = obterSemanaDoAno(dataAtual);
const enumSigno = signos.find(
  (item) => item.id === parseInt(id.toString())
)?.enum;

const apiBusca: apiBuscaSignoTipoReferencia =
  reactive<apiBuscaSignoTipoReferencia>({
    referencia: semanaDoAno,
    signo: enumSigno,
    tipo: "SEMANA",
  });
function obterSemanaDoAno(data: Date): number {
  const inicioDoAno = new Date(data.getFullYear(), 0, 1);
  const diff = (data.getTime() - inicioDoAno.getTime()) / (1000 * 60 * 60 * 24);
  const semanaDoAno = Math.ceil((diff + inicioDoAno.getDay() + 1) / 7);
  return semanaDoAno;
}
onMounted(async () => {});
</script>

<style scoped></style>
