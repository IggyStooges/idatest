<template>
  <nav :class="$style['nav']">
    <ul :class="$style['nav__list']">
      <li>
        <NuxtLink
          :to="`/item/${path}/specifications`"
          :class="$style.nav__link"
        >
          Specifications
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/item/${path}/team`" :class="$style.nav__link">
          Team
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/item/${path}/term`" :class="$style.nav__link">
          Rent terms
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
  },
}
</script>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';
.nav {
  &__list {
    list-style: none;
    display: flex;
    padding-left: 0;
    margin-top: rem(15);
    margin-bottom: rem(15);

    li {
      &:not(:first-child) {
        margin-left: auto;

        @include min-desktop {
          margin-left: rem(30);
        }
      }
    }
  }

  &__link {
    $color: $--light-gray;

    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: $color;
    transition: color 0.3s;
    user-select: none;

    &:hover {
      color: darken($color, 15%);
    }

    &:active {
      color: darken($color, 25%);
    }
  }
}
</style>
