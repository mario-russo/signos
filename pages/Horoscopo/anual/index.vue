<template>
    <div>
        <!-- <NoticiaSignosComponent :signo="signo" /> -->
        <cardSignos :rota="redirectPath"></cardSignos>
    </div>
</template>

<script setup lang="ts">
import { postSigno } from 'utils/types';

const signo: postSigno = {
    conteudoSigno: "mais mais ",
    dataPost: "21/12/34",
    id: 1,
    idSigno: 1,
    nomeDoSignos: "nomemais"
}

function redirectPath(signo: number) {
    useRouter().push({ path: "/horoscopo/anual/" + signo })
}

</script>

<style scoped></style>