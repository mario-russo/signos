// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "google-adsense-account", content: "ca-pub-2885282252818507" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_URL || "http://localhost:8080/",
      gtagId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt", "@nuxt/image"],
});
