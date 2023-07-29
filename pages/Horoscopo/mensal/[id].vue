<template>
    <div>
        <noticiaSignosComponent :signo="signo"/>
    </div>
</template>

<script setup lang="ts">
import { postSigno } from 'utils/types';


const signo: postSigno = {
    id: 0,
    idSigno: 0,
    nomeDoSignos: 'signo nome ',
    dataPost: '21/292938/2313',
    conteudoSigno: 'conteudo do signo aqui '
}
</script>
<style scoped></style>