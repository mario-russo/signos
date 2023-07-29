<template>
    <div class="oi grid grid-cols-1 md:grid-cols-6">
        <CardSignos :rota="redirectPath" class="col-start-1 col-end-6"></CardSignos>
        <div class="justify-center">
            <!-- <h1 class="pt-20 w-10">anuncio</h1> -->
            <!-- {{ aries }}h2 -->
        </div>
    </div>
</template>

<script setup lang="ts">

import{signoStore}from '~/stores/signoStore'


const storeSigno= signoStore()

const aries = storeSigno.nome(11)

function redirectPath(signo:number){
    useRouter().push({ path: "caracteristica/" + signo })
}
</script>

<style scoped>
@import url("~/assets/css/tamanhoFonte.css");

.oi {
    min-height: 600px;
    background-color: #f7f7f7;
}
</style>