<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~~/components/Header'
export default {
  components: {
    Header,
  },
  computed: {
    meta() {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no',
        },
        { hid: 'description', name: 'description', content: 'Р“Р»Р°РІРЅР°СЏ' },
      ]
    },
  },
}
</script>

<style>
html {
  font-family: 'Codec Pro', 'Arial', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-weight: 300;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
