// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@primevue/nuxt-module'],
  primevue: {
    importTheme: { from: '@/primevue.theme.js' },
    options: {
      ripple: false,
      inputVariant: 'filled',
    },
  },
  css: ['primeicons/primeicons.css'],
  build: {
    transpile: ['primevue'],
  },
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
});
