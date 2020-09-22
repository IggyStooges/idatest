<template>
  <div class="container">
    <Header />
    <Board :items="items" />
  </div>
</template>

<script>
import Header from '~~/components/Header'
import Board from '~~/components/Board'

export default {
  components: {
    Header,
    Board,
  },
  data() {
    return {
      items: [
        {
          cSlug: `sfsafsa`,
          name: `Cooper`,
          price: `1156 $`,
          description: `safasfasasf`,
        },
        {
          cSlug: `safsfasa`,
          name: `Shmooper`,
          price: `156 $`,
          description: `safasfasasf`,
        },
        {
          cSlug: `sfsfsafsa`,
          name: `Puper`,
          price: `16 $`,
          description: `safasfasasf`,
        },
        {
          cSlug: `safsfsfasdfdsgdsg`,
          name: `Tropper`,
          price: `1560 $`,
          description: `safasfasasf`,
        },
        {
          cSlug: `sf232dw3ef`,
          name: `mopper`,
          price: `166 $`,
          description: `safasfasasf`,
        },
      ],
      user: {
        name: `Johny Walker`,
        img: `./pic/userpic.png`,
      },
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1920px;
}
</style>
