<template>
        <section class="caixa-horoscopo">
            <h1 class="">Horóscopo</h1>
            <div class="shadow bg-white shadow-lg rounded-lg p-4 ">
                <h2 class="mb-3">Semanal</h2>
                <p class="">Aqui você encontra todos os horóscopo de todos os signos da semana </p>
                <div class="mt-4">
                    <a href="#" class="text-blue-500 font-semibold">Escolha o signo</a>
                </div>
            </div>
            <div class="shadow bg-white shadow-lg rounded-lg p-4 ">
                <h2 class="mb-4">Mensal</h2>
                <p class="">Aqui você encontra todos os horóscopo de todos os signos da semana </p>
                <div class="mt-3">
                    <a href="#" class="text-blue-500 font-semibold">Escolha o signo</a>
                </div>
            </div>
            <div class="shadow bg-white shadow-lg rounded-lg p-4 mb-10">
                <h2 class="mb-3">Anual</h2>
                <p class="">Aqui você encontra todos os horóscopo de todos os signos da semana </p>
                <div class="mt-4">
                    <a href="#" class="text-blue-500 font-semibold">Escolha o signo</a>
                </div>
            </div>
        </section>
</template>
<style scoped>
h1{
font-size: 1.7rem;
}
h2{
font-size: 1.4rem;
}
p{
font-size: 1.2rem;
}
.caixa-horoscopo {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 2.0rem;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    box-sizing: border-box;
}

.caixa-horoscopo div {
    padding: 1rem;
    /* background-color: rgba(180, 128, 128, 0.445);  */
}

/* Estilos para telas menores (até 600px) */
@media (max-width: 600px) {
    .caixa-horoscopo {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: normal;
        justify-content: center;
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