<template>
    <div>
        <footer class="bg-gray-900 text-white py-8">
            <div class="max-w-6xl mx-auto flex flex-wrap justify-between">
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h4 class="text-lg font-bold mb-4">Redes Sociais</h4>
                    <ul class="list-none">
                        <li><a href="#" class="text-gray-400 hover:text-gray-200">Facebook</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-gray-200">Twitter</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-gray-200">Instagram</a></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h4 class="text-lg font-bold mb-4">Horóscopo</h4>
                    <ul class="list-none">
                        <li><NuxtLink to="/horoscopo/semanl" class="text-gray-400 hover:text-gray-200">Meu horóscopo da semana</NuxtLink></li>
                        <li><NuxtLink to="/horoscopo/mensal" class="text-gray-400 hover:text-gray-200">Horóscopo do mês</NuxtLink></li>
                        <li><NuxtLink to="/horoscopo/anual" class="text-gray-400 hover:text-gray-200">Horóscopo 2023</NuxtLink></li>
                    </ul>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h4 class="text-lg font-bold mb-4">Páginas</h4>
                    <ul class="list-none">
                       <li><NuxtLink to="/" class="text-gray-400 hover:text-gray-200">Home</NuxtLink></li> 
                        <li><NuxtLink to="/horoscopo" class="text-gray-400 hover:text-gray-200">horóscopo</NuxtLink></li>
                        <li><NuxtLink to="/caracteristica" class="text-gray-400 hover:text-gray-200">Característica</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </footer>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>