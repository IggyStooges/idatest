<template>
  <div :class="$style.board" class="container">
    <BoardMenu />
    <Cards :items="items" />
  </div>
</template>

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

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';
.board {
  border-radius: rem(20);
  background-color: $--base-gray;
  padding-top: rem(25);
}
</style>
