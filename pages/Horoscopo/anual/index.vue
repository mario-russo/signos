<template>
  <div>
    <cardSignos :rota="redirectPath"></cardSignos>
  </div>
</template>

<script setup lang="ts">
function redirectPath(nome: string) {
  useRouter().push({
    path: "/horoscopo/anual/" + nome,
  });
}
useHead({
  title: `Mundo Astral | Horóscopo do Ano`,
  meta: [
    {
      name: "description",
      content: `Descubra as previsões e antecipe-se aos acontecimentos do ano com a astrologia, descobrindo o que os astros reservam para você. Aries, Touro, Gêmios, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário, Peixes.`,
    },
    {
      name: "keywords",
      content: `Horóscopo do ano 2024, previsões do , astrologia`,
    },
  ],
});
</script>

<style scoped></style>
