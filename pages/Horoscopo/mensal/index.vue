<script setup lang="ts">
useHead({
  title: "Mundo Astral | Horóscopo do Mes",
  meta: [
    {
      name: "keywords",
      content: `Horóscopo do mês, previsões astrologia para seu signo`,
    },
    {
      name: "description",
      content:
        "Horóscopo mensal: previsões astrológicas para todos os signos do zodíaco. Amor, carreira, saúde e muito mais para o mês atual.",
    },
  ],
});
function redirect(nome: string) {
  useRouter().push("/horoscopo/mensal/" + nome);
}
</script>
<template>
  <div>
    <CardSignos :rota="redirect"></CardSignos>
  </div>
</template>

<style scoped></style>
