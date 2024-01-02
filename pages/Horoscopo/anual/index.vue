<template>
  <div>
    <cardSignos :rota="redirectPath"></cardSignos>
  </div>
</template>

<script setup lang="ts">
function redirectPath(signo: number) {
  useRouter().push({ path: "/horoscopo/anual/" + signo });
}
</script>

<style scoped></style>
