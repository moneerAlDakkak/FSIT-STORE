// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  fonts: {
    families: [
      { name: "Dubai", weight: "normal", src: "/font/Dubai-Regular.ttf" },
    ],
  },
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "Developer Test Store",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  modules: ["@nuxt/fonts"],
});
