// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_URL || "http://localhost:8080/",
      gtagId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-analytics",
  ],
});
