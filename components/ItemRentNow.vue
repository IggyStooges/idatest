<template>
  <div :class="$style['rent-now']">
    <div>
      Rent for <span :class="$style['rent-now__price']"> {{ rent }} $/h</span>
    </div>

    <a :class="$style['rent-now__link']" class="btn" href="#">Rent now</a>
  </div>
</template>

<script>
export default {
  props: {
    rent: {
      type: Number,
      default: () => 100,
    },
  },
}
</script>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';

.rent-now {
  $background: $--base-gray;
  $color: $--light-black;
  $shadow-color: $--dirty-white;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: rem(10) rem(25);
  background-color: $background;
  border-radius: rem(16);
  font-weight: bold;
  color: $color;
  position: fixed;
  bottom: rem(30);
  left: rem(15);
  right: rem(15);
  box-shadow: 0 rem(-20) rem(30) rem(15) $shadow-color;

  @include min-desktop {
    position: static;
    margin-top: rem(30);
  }

  &__link {
    $background: $--main-violet;
    $color: $--dirty-white;

    padding: rem(15) rem(25);
    background-color: $background;
    border-radius: rem(12);
    font-weight: bold;
    font-size: rem(14);
    color: $color;
    user-select: none;

    &:hover {
      box-shadow: 0 0 rem(5) rem(5) rgba($--main-violet, 0.5);
    }

    &:active {
      box-shadow: 0 0 rem(5) rem(2) rgba($--main-violet, 0.5);
    }
  }

  &__price {
    $color: $--main-pink;

    color: $color;
  }
}
</style>
