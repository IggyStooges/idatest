<template>
  <div :class="$style.board">
    <BoardMenu />
    <Cards :items="items" />
  </div>
</template>

<style lang="scss" module>
@import '~/assets/scss/global-styles.scss';
.board {
  border-radius: 20px;
  background-color: $--base-gray;
}
</style>

<script>
import BoardMenu from '~~/components/BoardMenu'
import Cards from '~~/components/Cards'

export default {
  components: {
    Cards,
    BoardMenu,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
