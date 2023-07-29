<template>
    <section class="corpo">
        <header >
            <navBar></navBar>
        </header>
        <main>
                <slot />
        </main>
        <footer>
            <FooterComponent></FooterComponent>
        </footer>
    </section>
</template>
<style scoped src="~/assets/css/tamanhoFonte.css">
@import url("~/assets/css/tamanhoFonte.css");
.corpo{
    font-family: Helvetica;

}
main{
    padding-top: 80px;
}
</style>
  