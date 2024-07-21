// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/sanity", "@nuxt/image"],
  sanity: {
    projectId: 'g1np79jx'
  }
})