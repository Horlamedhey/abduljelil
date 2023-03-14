// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "nuxt-headlessui",
  ],
  googleFonts: {
    families: {
      "Open Sans": true,
      Poppins: true,
      "Croissant One": true,
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100],
      // },
    },
  }, // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
  },
});
