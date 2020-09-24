<template>
  <ul :class="$style['features']">
    <li>
      <div :class="$style['features__icon']">
        <svg-icon width="24" height="24" name="cup" />
      </div>
      <div>
        <span :class="$style['features__title']">
          A challenge for a true champion
        </span>
        <p :class="$style['features__text']">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </li>
    <li>
      <div :class="$style['features__icon']">
        <svg-icon width="22" height="28" name="pilot" />
      </div>
      <div>
        <span :class="$style['features__title']">
          A challenge for a true champion
        </span>
        <p :class="$style['features__text']">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';
.features {
  padding-left: 0;
  list-style: none;
  margin-top: rem(20);

  li {
    display: flex;
    align-items: center;
    margin-bottom: rem(16);
  }

  &__icon {
    $background: $--base-gray;

    width: rem(64);
    min-width: rem(64);
    height: rem(80);
    background-color: $background;
    border-radius: rem(16);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: rem(15);

    @include min-desktop {
      width: rem(80);
      min-width: rem(80);
      height: rem(96);

      svg {
        width: rem(29);
        height: rem(24);
      }
    }
  }

  &__title {
    $color: $--light-black;
    font-weight: bold;
    color: $color;
  }

  &__text {
    $color: $--light-gray;
    font-weight: 300;
    font-size: rem(14);
    line-height: rem(20);
    color: $color;

    @include min-desktop {
      margin-top: rem(5);
    }
  }
}
</style>
