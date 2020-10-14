export default {
  ssr: false,

  target: 'static',

  router: {
    base: '/idatest/'
  },

  head: {
    title: 'idatest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['normalize.css', './assets/scss/global-styles.scss'],

  plugins: [
    { src: '~plugins/svg4everybody.js', ssr: false }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
    [
      'nuxt-font-loader-strategy',
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          {
            fileExtensions: ['woff2', 'woff'],
            fontFamily: 'Codec Pro',
            fontFaces: [
              {
                preload: true,
                localSrc: ['CodecPro', 'CodecPro-Light'],
                src: '@/assets/fonts/CodecPro-Light',
                fontWeight: 300,
                fontStyle: 'normal',
              },
              {
                preload: true,
                localSrc: ['CodecPro', 'CodecPro-Bold'],
                src: '@/assets/fonts/CodecPro-Bold',
                fontWeight: 700,
                fontStyle: 'normal',
              },
            ],
          },
        ],
      },
    ],
  ],
  axios: {},

  styleResources: {
    scss: [],
    less: [],
    stylus: [],
  },
  content: {},

  build: {
    transpile: ['vue-instantsearch', 'instantsearch.js/es'],
  },
}
