<template>
  <div>
    <Header />
    <h1>{{ item.name }}</h1>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import Header from '~~/components/Header'

export default {
  components: {
    Header,
  },
  data() {
    return {}
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1920px;
}
</style>
