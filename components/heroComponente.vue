<template>
  <section class="text-white tela">
    <div class="container h-full px-4 text-center m-auto hero">
      <h1 class="text-4xl font-bold mt-4">Seu Horóscopo Diário</h1>
      <p class="text-lg md:text-2xl">
        Descubra o que os astros têm reservado para você nesta semana, Esteja
        pronto para abraçar oportunidades, superar desafios para cada momento
        dessa jornada astral. Seja guiado pelas estrelas e manifeste o seu
        potencial máximo. O horóscopo da semana está aqui para iluminar o seu
        caminho rumo ao sucesso e à realização pessoal.
      </p>
      <span class="">
        <NuxtLink
          to="/horoscopo/semanal"
          class="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded"
          >Semanal</NuxtLink
        >
      </span>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.tela {
  height: 100vh;
  background-image: linear-gradient(-30deg, #05205734, #92039fd3),
    url("~/assets/img/horos1.jpg");
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
}
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
}
</style>
