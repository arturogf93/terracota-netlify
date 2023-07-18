export default {
  // ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // router: {
  //   base: '/lp/'
  // },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'lpi',
        path: '/lpi',
        component: resolve(__dirname, 'pages/lp.vue')
      })
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Terracota San Miguel de Allende',
    title: 'Inicio',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Terracota se encuentra dentro de la comunidad exclusiva de Zirándaro, a escasos minutos del centro de San Miguel de Allende.' },
      { hid: 'image', name: 'image', content: 'https://terracota.s3.amazonaws.com/email/email-header.jpg' },
      // OG
      { hid: 'og:title', property: 'og:title', content: 'Terracota San Miguel de Allende' },
      { hid: 'og:type', property: 'og:type', content: 'Article' },
      { hid: 'og:url', property: 'og:url', content: 'https://terracotahomes.com/' },
      { hid: 'og:description', property: 'og:description', content: 'Terracota se encuentra dentro de la comunidad exclusiva de Zirándaro, a escasos minutos del centro de San Miguel de Allende.' },
      { hid: 'og:image', property: 'og:image', content: 'https://terracota.s3.amazonaws.com/email/email-header.jpg' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://terracota.s3.amazonaws.com/email/email-header.jpg' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Terracota San Miguel de Allende' },
      // Twitter
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://twitter.com/' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Terracota San Miguel de Allende' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Terracota se encuentra dentro de la comunidad exclusiva de Zirándaro, a escasos minutos del centro de San Miguel de Allende.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://terracota.s3.amazonaws.com/email/email-header.jpg' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'https://terracota.s3.amazonaws.com/email/email-header.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#fff' }
    ],
    script: [
      { src:'//js-na1.hs-scripts.com/19965847.js', async: true, defer: true, type: 'text/javascript' },
      // { src:'/js/pixel.js', type: 'text/javascript' },
      // { src:'https://www.googletagmanager.com/gtag/js?id=UA-148908693-4', async: true },
      { src:'/js/gtag.js', type: 'text/javascript', async: true }
    ],
    noscript: [
      // { innerHTML: '<img height="1" width="1" src="https://www.facebook.com/tr?id=764216217586886&ev=PageView &noscript=1" />' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/css.css',
    '@/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/jsonld' },
    { src: '~plugins/aos.js', ssr: false },
    { src: '~plugins/vue-tinybox.js', ssr: false },
    { src: '~plugins/vue-rellax.js', ssr: false },
    // { src: '~plugins/vue-gtag.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  sitemap: {
    hostname: 'https://terracotahomes.com/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg'
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#E16E49',
          secondary: '#62553e',
          accent: '#252626'
        }
      }
    }
  },

  publicRuntimeConfig: {
    url: 'https://terracotahomes.com/',
    email: 'info@terracotahomes.com',
    instagram: 'https://www.instagram.com/terracota.homes/',
    facebook: 'https://www.facebook.com/TerracotaHomes',
    whatsapp: '+524151247445',
    whatsapp_format: '+52 (415) 124-7445',
    maps: 'https://www.google.com/maps/place/Terracota+Homes/@20.910977,-100.689866,16z/data=!4m5!3m4!1s0x0:0x6e330f12d4bb3a47!8m2!3d20.9109765!4d-100.6898662?hl=es-419&shorturl=1',
    contact_form: '',
    brochure_form: 'https://03od44pgi6.execute-api.us-east-1.amazonaws.com/sendBrochureEmail',
    notify_form: 'https://jjwtgeftxj.execute-api.us-east-1.amazonaws.com/send'
  },

  generate: {
    fallback: '404.html'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    // cache: true
  }
}
