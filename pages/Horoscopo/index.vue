<script setup lang="ts">
function redirect() {
  useRouter().push({ path: "/horoscopo/anual" });
}
useHead({
  title: "Mundo Astral | Semanal, Mensal, Anual",
  meta: [
    {
      name: "description",
      content:
        "Descubra o que os astros têm reservado para você nesta semana. Esteja pronto para abraçar oportunidades, superar desafios e manifestar o seu potencial máximo. Deixe-se guiar pelas estrelas com o horóscopo semanal, iluminando seu caminho rumo ao sucesso e à realização pessoal.l",
    },
    {
      name: "keywords",
      content:
        "horóscopo, previsões, astrologia, semana, estrelas, oportunidades, desafios, sucesso, realização pessoal",
    },
  ],
});
</script>
<template>
  <div class="conteudo flex-column mx-auto items-center container">
    <div class="caixa pt-50">
      <article class="p-10 shadow bg-green">
        <h2>Semanal</h2>
        <p class="mb-5">Horóscopo da semana: insights e previsões.</p>
        <div>
          <NuxtLink
            to="/horoscopo/semanal"
            class="cursor-pointer font-bold text-white bg-teal-400 px-8 py-2 hover:bg-teal-500 rounded"
          >
            Ver mais
          </NuxtLink>
        </div>
      </article>
      <article class="shadow p-10">
        <h2>Mensal</h2>
        <p class="mb-5">Explore previsões astrológicas mensais.</p>
        <div>
          <NuxtLink
            to="/horoscopo/mensal"
            class="cursor-pointer font-bold text-white bg-teal-400 px-8 py-2 hover:bg-teal-500 rounded"
          >
            Ver mais
          </NuxtLink>
        </div>
      </article>
      <article class="shadow p-10">
        <h2>Anual</h2>
        <p class="mb-5">Previsões astrológicas anuais completas.</p>
        <div>
          <NuxtLink
            @click="redirect"
            class="cursor-pointer font-bold text-white bg-teal-400 px-8 py-2 hover:bg-teal-500 rounded"
          >
            Ver mais
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>
<style scoped>
@import url("~/assets/css/tamanhoFonte.css");
.conteudo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  padding-top: 100px;
  min-height: 90vh;
}

.caixa {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1.6rem;
  font-family: Helvetica;
  text-align: center;
}

.caixa article {
  min-width: 33%;
  min-height: 250px;
}

/* Estilos para dispositivos móveis (tamanhos em pixels) */
@media (max-width: 768px) {
  .conteudo {
    display: flex;
    flex-direction: column;
  }

  .caixa {
    display: flex;
    flex-direction: column;
  }

  .caixa article {
    width: 350px;
  }
}
</style>
