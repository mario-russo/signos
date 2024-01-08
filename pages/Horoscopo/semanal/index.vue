<script setup lang="ts">
function redirect(nome: string) {
  useRouter().push("/horoscopo/semanal/" + nome);
}
useHead({
  title: `Mundo Astral | Horóscopo da Semana`,
  meta: [
    {
      name: "description",
      content: `Confira as previsões astrológicas semanais para o seu signo. Descubra o que os astros reservam para você em amor, carreira, saúde, finanças e espiritualidade nesta semana. Mantenha-se atualizado com as influências cósmicas que impactarão a sua vida.`,
    },
    {
      name: "keywords",
      content: `horóscopo semanal,, previsões semanais, astrologia`,
    },
  ],
});
</script>
<template>
  <div>
    <cardSignos :rota="redirect"></cardSignos>
  </div>
</template>

<style scoped></style>
