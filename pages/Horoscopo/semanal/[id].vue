<template>
    <div>
        <NoticiaSignosComponent :signo="signo"></NoticiaSignosComponent>
        <h1>{{ id }}</h1>
    </div>
</template>

<script setup lang="ts">
import { postSigno } from 'utils/types';
import { useRoute } from 'vue-router';

const { id } = useRoute().params
const signo: postSigno = {
    id: 0,
    idSigno: 0,
    nomeDoSignos: 'teste para ',
    dataPost: '21/23/223',
    conteudoSigno: 'signo '
}
</script>

<style scoped></style>