<script setup lang="ts">
function redirect(id: number) {
  useRouter().push("/horoscopo/semanal/" + id);
}
</script>
<template>
  <div>
    <cardSignos :rota="redirect"></cardSignos>
  </div>
</template>

<style scoped></style>
