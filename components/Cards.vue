<template>
  <ul :class="$style.items">
    <li v-for="item in items" :key="item.cSlug" :class="$style.card">
      <nuxt-link :to="`/item/${item.cSlug}/speca`" :class="$style.card__link">
        <img
          :src="item.cImage"
          :class="$style.card__img"
          width="88"
          height="88"
        />
        <div :class="$style.card__content">
          <h3 :class="$style.card__header">{{ item.name }}</h3>
          <p :class="$style.card__description">{{ item.description }}</p>
          <span :class="$style.card__price">{{ item.price }}</span>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" module>
@import '~~/assets/scss/global-styles.scss';

.items {
  list-style: none;
  padding-left: 0;
  padding-top: rem(25);
  padding-bottom: rem(25);

  @include min-tablet {
    display: flex;
    flex-wrap: wrap;
    margin-left: rem(-15);
    margin-right: rem(-15);
  }
}

.card {
  $parent: &;
  padding-bottom: rem(12);

  @include min-tablet {
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    padding-left: rem(15);
    padding-right: rem(15);
  }

  @include min-desktop {
    width: 33.3%;
  }

  &__link {
    display: flex;
    width: 100%;
    background-color: $--real-white;
    align-items: center;
    border-radius: rem(24);
    padding: rem(20);
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 0 rem(10) rem(8) rgba($--real-black, 0.05);

      #{$parent}__img {
        transform: scale(1.1);
      }
    }

    &:active {
      box-shadow: 0 0 rem(10) rem(5) rgba($--real-black, 0.05);

      #{$parent}__img {
        transform: scale(0.9);
      }
    }
  }

  &__img {
    width: rem(88);
    min-width: rem(88);
    height: rem(88);
    border-radius: rem(24);
    transition: transform 0.2s;
  }

  &__header {
    $color: $--light-black;

    font-weight: bold;
    font-size: rem(16);
    color: $color;
    margin-bottom: rem(10);
  }

  &__content {
    margin-left: rem(20);

    @include min-desktop {
      margin-left: rem(25);
    }
  }

  &__description {
    $color: $--light-gray;

    font-weight: 300;
    font-size: rem(12);
    line-height: rem(18);
    color: $color;
    margin-bottom: rem(15);
  }

  &__price {
    $color: $--main-pink;

    font-weight: bold;
    font-size: rem(14);
    line-height: rem(24);
    color: $color;
  }
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
