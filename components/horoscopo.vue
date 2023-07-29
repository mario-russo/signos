<template>
    <navBar></navBar>
    <div class="container mx-auto p-4">
        <section class="grid">
            <div class="max-w-4xl mx-auto py-8">
                <div class="titulo mt-10">
                    <img class="rounded-full h-20" src="~/public/imagem/aries.jpg" alt="Imagem do Card">
                    <h1 class="text-3xl font-bold mb-4 mt-20">Aries</h1>
                </div>
                <h2 class="text-xl font-semibold mb-4">Caracteristicas</h2>

                <p> Data da notícia: [Data]</p>
                <p class="text-gray-700 leading-relaxed">
                    Os nascidos sob o signo de Áries são destaque por sua determinação e coragem inabaláveis. Com a energia
                    e
                    entusiasmo
                    característicos, eles enfrentam desafios de frente e lideram naturalmente em diversas situações.
                </p>

                <p class="text-gray-700 leading-relaxed">
                    Seja no trabalho, nos relacionamentos ou em qualquer aspecto da vida, os arianos são conhecidos por sua
                    busca
                    incansável por aventuras e novas experiências. Sua paixão intensa e generosidade inigualável inspiram
                    aqueles ao
                    seu
                    redor a seguir seus passos.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    O espírito competitivo dos arianos é equilibrado por sua honestidade e franqueza. Eles não têm medo de
                    dizer
                    o
                    que
                    pensam, mas também são leais e protetores com as pessoas que amam.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    Arianos são líderes naturais, confiantes em suas habilidades e ambiciosos em seus objetivos. Sua energia
                    inesgotável
                    e determinação fazem com que alcancem o sucesso e a estabilidade que buscam.
                </p>
                <p class="text-gray-700 leading-relaxed">
                    Essas características, somadas à sua personalidade marcante e cativante, tornam os arianos indivíduos
                    únicos
                    e
                    especiais em nossas vidas.
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
    <footerComponent></footerComponent>
</template>

<script setup lang="ts">

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