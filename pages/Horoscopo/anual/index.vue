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
</script>

<style scoped></style>
