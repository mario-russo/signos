<template>
  <div>
    <NoticiaSignosComponent
      :semana="signo"
      :titulo-da-page="`Previsões para ${signo?.nomeDoSigno} - 2024`"
    />
  </div>
</template>
<script setup lang="ts">
import { useSignoDoAno } from "./dados";

const { name } = useRoute().params;
const dataInfo = useObterData();

const signo = useSignoDoAno().getSigno.value(dataInfo.getYear(), name);
useHead({
  title: `Mundo Astral | Previsões Astrológicas ${signo?.nomeDoSigno}`,
  meta: [
    {
      name: "description",
      content: `Previsões astrológicas para o ${signo?.nomeDoSigno} em 2024. Saiba o que os astros reservam para o seu signo ao longo do ano. Amor, carreira, saúde, finanças e espiritualidade.`,
    },
    {
      name: "keywords",
      content: `horóscopo, previsões, astrologia, 2024, ${signo?.nomeDoSigno}, amor, carreira, saúde, finanças, espiritualidade`,
    },
  ],
});
</script>

<style scoped></style>
