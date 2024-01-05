<script setup lang="ts">
function redirect(nome: string) {
  useRouter().push("/horoscopo/semanal/" + nome);
}
</script>
<template>
  <div>
    <cardSignos :rota="redirect"></cardSignos>
  </div>
</template>

<style scoped></style>
