<template>
  <div class="">
    <noticiaSignosComponent
      :semana="semana"
      :titulo-da-page="`Horóscopo da semana de ${semana?.nomeDoSigno}`"
    ></noticiaSignosComponent>
  </div>
</template>

<script setup lang="ts">
import { useSignoDaSemana } from "./dados";
const { name } = useRoute().params;
const dataInfo = useObterData();
const semana = useSignoDaSemana().getSigno.value(
  dataInfo.getWeekNumber(),
  name
);
useHead({
  title: `Horóscopo Semanal para ${semana?.nomeDoSigno} | Saiba o que esperar do amor, do trabalho e da saúde neste ano. Leia o nosso blog e fique por dentro das novidades."`,
  meta: [
    {
      name: "description",
      content: `Confira as previsões semanais para ${semana?.nomeDoSigno}, e descubra o que os astros reservam para você nesta semana, antecipe-se aos acontecimentos da semana com a astrologia.`,
    },
    {
      name: "keywords",
      content: `horóscopo semanal, ${semana?.nomeDoSigno}, previsões semanais, astrologia`,
    },
  ],
});
</script>

<style scoped>
.page {
  min-height: 80vh;
}
</style>
