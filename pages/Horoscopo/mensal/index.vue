<script setup lang="ts">
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
