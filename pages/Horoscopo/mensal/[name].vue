<template>
  <div>
    <title>
      Horóscopo Mensal - Previsões Astrológicas para janeiro de 2024 - Nome do
      Seu Site
    </title>
    <noticiaSignosComponent
      :semana="signo"
      :titulo-da-page="`${signo.nomeDoSigno} - janeiro 2024`"
    />
  </div>
</template>

<script setup lang="ts">
import { useSignos } from "~/composables/useSignos";
import { useSignoDaMensal } from "./dados";
const { name } = useRoute().params;
const dataInfo = useObterData();
const signo = useSignoDaMensal().getSigno.value(
  dataInfo.getMonthNumber(),
  name
);
useHead({
  title: `Mundo Astral | Horóscopo Mensal Para ${signo?.nomeDoSigno} - Previsões Astrológicas para janeiro de 2024 - Mundo Astral`,
  meta: [
    {
      name: "description",
      content: `Descubra as previsões mensais para ${signo?.nomeDoSigno} e Confira as previsões mensais, antecipe-se aos acontecimentos do mês com a astrologia , descobrindo o que os astros reservam para você.`,
    },
    {
      name: "keywords",
      content: `choróscopo mensal, ${signo?.nomeDoSigno}, previsões mensais, astrologia`,
    },
  ],
});
</script>
<style scoped></style>
