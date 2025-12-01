// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
});
