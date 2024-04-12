// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', "nuxt-icon"],
  css: ['~/assets/css/main.scss'],
  ssr: false,
  content: {
    experimental: {
      // To enable pagination, clientDB must be enabled
      // see: https://github.com/nuxt/content/issues/2062
      // stripQueryParameters and advanceQuery seems to need to be set to false
      clientDB: true,
      stripQueryParameters: false,
      advanceQuery: false,
    }
  }
})