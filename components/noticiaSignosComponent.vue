<template>
    <div class="container mx-auto p-4 color">
        <section class="grid">
            <div class="max-w-4xl mx-auto py-8">
                <div class="titulo mt-10">
                    <img class="rounded-full h-20" src="" alt="">
                    <h1 class="text-3xl font-bold mb-4 mt-20">{{ signo.nomeDoSignos }}</h1>
                </div>
                <h2 class="text-xl font-semibold mb-4">Meu horóscopo do dia </h2>
                <p> {{ signo.dataPost }}</p>
                <p class="text-gray-700 leading-relaxed" v-for="(texto, index) in signo.conteudoSigno" :key="index">
                    {{ texto }}
                </p>
            </div>
            <div class="anuncio">
                <h2>Seção de Anúncio</h2>
                <p>
                    Anúncio aqui.
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">

import type { postSigno } from '../utils/types';



const { signo } = defineProps<{ signo: postSigno }>()
</script>

<style scoped>
p {
    font-size: 1.3rem;
    /* Tamanho base da fonte */
    line-height: 1.6;
    /* Espaçamento entre linhas */
    margin: 30px 0 10px 0;
    text-align: justify;

}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1em;
    /* Tamanho maior para títulos */
}

h2 {
    font-size: 2rem;
    /* Tamanho para subtítulos */
}

.grid {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 20px;
    background-color: #fff;
}

.anuncio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    display: none;
}

.titulo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: safe;
    margin-bottom: 2rem;
}

.titulo h1 {
    display: block;
    margin-top: 35px;
    margin-left: 20px;
}

.color {
    background-color: #f7f7f7;
    font-family: Helvetica;

}

/* Estilos para telas menores (até 600px) */
@media (max-width: 600px) {
    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.9rem;
    }

    p {
        font-size: 1.5rem;
    }

    .grid {
        display: flex;
        flex-direction: column;
    }

    .titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: safe;
        margin-bottom: 1rem;
    }
}

/* Estilos para telas médias (de 601px até 900px) */
@media (min-width: 601px) and (max-width: 900px) {}

/* Estilos para telas maiores (acima de 900px) */
@media (min-width: 901px) {
    body {
        font-size: 18px;
    }
}
</style>