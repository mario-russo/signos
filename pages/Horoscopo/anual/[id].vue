<template>
    <div>
        <NoticiaSignosComponent :signo="signo" />
        <h1>
            {{ id }}
        </h1>
    </div>
</template>

<script setup lang="ts">
import { postSigno } from 'utils/types';

const {id} = useRoute().params
const idpage = parseInt(id.toString())

const signo = reactive<postSigno>({
    id: idpage,
    idSigno: idpage,
    nomeDoSignos: 'nome ',
    dataPost: '02/03/1993',
    conteudoSigno: 'texto'
})
</script>

<style scoped></style>