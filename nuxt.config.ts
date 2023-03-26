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
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xxxs: 320,
      xxs: 375,
      xs: 425,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  headlessui: {
    prefix: "Headless",
  },
});
