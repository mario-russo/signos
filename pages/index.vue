<template>
  <div>
    <HeroComponente></HeroComponente>
    <gridComponent></gridComponent>
    <FormularioComponent></FormularioComponent>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Mundo Astral",
  meta: [
    {
      name: "google-site-verification",
      content: "1-DbJE0W7JuHHbXVtFOsSTxIBCBSTHYv1oFv-qMsISO",
    },
  ],
});
interface signosArray {
  id: number;
  name: string;
  url: string;
  descricao: string;
}
const items: signosArray[] = reactive<signosArray[]>([
  {
    id: 1,
    name: "Aries",
    url: "~/assets/img/aries.jpg",
    descricao:
      "(21 de março a 19 de abril): Áries é conhecido por sua determinação e coragem. São líderes naturais e estão sempre em busca de novas aventuras. Seu amor é intenso e sua personalidade é forte.",
  },
  {
    id: 2,
    name: "Touro",
    url: "/assets/img/touro.jpg",
    descricao:
      "(21 de maio a 20 de junho): Touro é um signo confiável e sensual, que valoriza o prazer e a estabilidade. São leais e determinados, buscando segurança em todas as áreas da vida.",
  },
  {
    id: 3,
    name: "Gêmios",
    url: "~/assets/img/gemeos.jpg",
    descricao:
      "(21 de maio a 20 de junho): Gêmeos é curioso e comunicativo, sempre em busca de novas experiências. São versáteis e adoram aprender. A dualidade é uma característica forte desse signo",
  },
  {
    id: 4,
    name: "Câncer ",
    url: "~/assets/img/cancer.jpg",
    descricao:
      "(21 de junho a 22 de julho): Câncer é um signo sensível e intuitivo, que valoriza a família e o lar. Suas emoções são profundas e são conhecidos por serem protetores incansáveis",
  },
  {
    id: 5,
    name: "Leão ",
    url: "~/assets/img/leao.jpg",
    descricao:
      "(23 de julho a 22 de agosto): Leão é um signo carismático e confiante, que busca o destaque e a admiração. Possui uma paixão intensa e uma generosidade inigualável.",
  },
  {
    id: 6,
    name: "Virgem",
    url: "~/assets/img/virgem.jpg",
    descricao:
      "(23 de agosto a 22 de setembro): Virgem é organizado e analítico, buscando a perfeição e a eficiência em tudo o que faz. São práticos e atenciosos aos detalhes.",
  },
  {
    id: 7,
    name: "Libra",
    url: "~/assets/img/libra.jpg",
    descricao:
      "(23 de setembro a 22 de outubro): Libra é um signo diplomático e encantador, que busca a harmonia e o equilíbrio em todos os aspectos da vida. Valoriza a justiça e os relacionamentos.",
  },
  {
    id: 8,
    name: "Escorpião",
    url: "~/assets/img/escorpiao.jpg",
    descricao:
      "(23 de outubro a 21 de novembro): Escorpião é intenso e magnético, com uma grande força emocional. São misteriosos e apaixonados pela transformação.",
  },
  {
    id: 9,
    name: "Sagitário",
    url: "~/assets/img/sagitario.jpg",
    descricao:
      "(22 de novembro a 21 de dezembro): Sagitário é aventureiro e otimista, buscando a liberdade e a expansão. Possui um desejo insaciável por conhecimento e novas experiências.",
  },
  {
    id: 10,
    name: "Capricórnio",
    url: "~/assets/img/capricornio.jpg",
    descricao:
      "(22 de dezembro a 19 de janeiro): Capricórnio é ambicioso e disciplinado, buscando o sucesso e a estabilidade. Sua persistência e ambição são inabaláveis.",
  },
  {
    id: 11,
    name: "Aquário",
    url: "~/assets/img/aquario.jpg",
    descricao:
      "(20 de janeiro a 18 de fevereiro): Aquário é original e humanitário, valorizando a liberdade e a igualdade. Possui uma mentalidade progressista e mente aberta.",
  },
  {
    id: 12,
    name: "Peixes",
    url: "./assets/img/peixes.jpg",
    descricao:
      "(19 de fevereiro a 20 de março): Peixes é um signo sensível e empático, com uma grande intuição e compaixão. São sonhadores e possuem uma forte conexão com o mundo espiritual.",
  },
]);
</script>

<style scoped></style>
