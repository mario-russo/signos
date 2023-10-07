<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Entrar com sua conta
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Seu email</label
              >
              <input
                :v-model="login.email"
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
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Senha</label
              >
              <input
                :v-model="login.senha"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="true"
              />
            </div>
            <button
              @click="postData"
              class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Entra
            </button>
            <div class="flex justify-between">
              <NuxtLink
                class="text-sm font-medium text-blue-800 hover:underline dark:text-blue-500"
                >Esqueceu a a senha?</NuxtLink
              >
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Ainda não tem uma conta?
                <a
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >Resgistrar</a
                >
              </p>
              {{ login2 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

let login2 = {
  senha: "1234",
  email: "mario.russo93@hotmail.com",
};

async function postData() {
  try {
    const { data: response } = await useFetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login2),
    });

    if (!response.value) {
      throw new Error("Erro ao fazer a requisição POST");
    }

    const responseData = response;

    console.log(responseData.value);
  } catch (error) {
    console.error("Erro ao fazer a requisição POST:", error);
  }
}
</script>

<style scoped></style>
