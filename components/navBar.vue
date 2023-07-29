<template>
    <nav class="p-5 bg-gray-900 text-white shadow md:flex md:items-center md:justify-between fixed w-full ">
        <div class="flex justify-between items-center">
            <span class="text-2xl"> MEU DIA </span>
            <span class="text-4xl cursor-pointer mx-2 md:hidden block" @click="openMenu">
                <Icon :name="`ic:baseline-${menu}`" color="white" />
            </span>

        </div>
        <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-gray-900 w-full
        left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500
        ">
            <li v-for="(item, index) in links" :key="index" class="mx-4 my-6 md:my-0">
                <NuxtLink @click="menuclose()" class="text-xl hover:text-cyan-400 duration-500 " :to="item.path"> {{ item.nome }}</NuxtLink>
            </li>
            <li 
                class=" text-xl bg-cyan-400 text-white font-[poppins] duartion-600 px-8 py-2 mx-4 hover:bg-cyan-600 rounded">
                <NuxtLink> Entrar</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
interface rota {
    nome: string,
    path: string,
}

const links = reactive<rota[]>([{ nome: "Home", path: "/" }, { nome: "Horóscopo", path: "/horoscopo" }, { nome: "Caracteristica", path: "/caracteristica" },])

let menu = ref<string>('menu')
function menuclose() {
    let ul = document.querySelector('ul')

    ul?.classList.remove('top-[80px]')
    ul?.classList.remove('opacity-100')
    ul?.classList.add('absolute')
    menu.value = 'menu'
}

function openMenu() {
    let ul = document.querySelector('ul')

    if (menu.value === 'menu') {
        menu.value = 'close'
        ul?.classList.add('top-[80px]')
        ul?.classList.add('opacity-100')
        ul?.classList.remove('absolute')
    } else {
        menu.value = 'menu'
        ul?.classList.remove('top-[80px]')
        ul?.classList.remove('opacity-100')
        ul?.classList.add('absolute')
    }
}
</script>

<style scoped></style>