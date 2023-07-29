<template>
    <div>
        <div class="pt-20 p-4 text-center">
            <h1>Caracteristica</h1>
            <h2>Escolha o Signo</h2>
            <section class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 text-center">
                <section v-for="(signo) in signos" :key="signo.id" class="shadow p-2" @click="">
                    <h3>{{ signo.nomeImage }}</h3>
                    <p class="mb-5">{{ signo.data }}</p>
                    <NuxtLink class="cursor-pointer text-white bg-teal-400 font-bold shadow py-1 px-8  mb-5 rounded"
                        @click="props.rota(signo.id)">Ver</NuxtLink>
                </section>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { signoStore } from '~/stores/signoStore'

const storeSigno = signoStore()

const signos = storeSigno.signos
const props = defineProps({rota:{type:Function, default:()=>{}}})


// function rota(signo: number) {

//     useRouter().push({ path: "caracteristica/" + signo })
// }

onMounted(() => {
})
</script>

<style scoped>
@import url("~/assets/css/tamanhoFonte.css");
</style>