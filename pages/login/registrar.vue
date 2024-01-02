<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <h1
          class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Entrar com sua conta
        </h1>
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div>
            <label
              :v-model="email"
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Seu email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required="true"
            />
          </div>
          <div>
            <label
              for="nome"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Digite seu nome</label
            >
            <input
              :v-model="nome"
              type="text"
              name="nome"
              id="nome"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mário Russo"
              required="true"
            />
          </div>
          <div>
            <label
              for="Senha"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Digite sua Senha</label
            >
            <input
              :v-model="senha"
              type="password"
              name="Senha"
              id="Senha"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="***********"
              required="true"
            />
          </div>
          <button
            @click="postData"
            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
let senha = ref<string>();
let email = ref<string>();
let nome = ref<string>();

async function postData() {
  try {
    const dataToSend = { senha, email, nome };

    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer a requisição POST");
    }

    const responseData = await response.json();
  } catch (error) {
    console.error("Erro ao fazer a requisição POST:", error);
  }
}
</script>

<style scoped></style>
