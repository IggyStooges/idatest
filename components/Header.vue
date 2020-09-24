<template>
  <header>
    <div :class="$style.header__container" class="container">
      <NuxtLink to="/" :class="$style.header__logo">
        <svg-icon
          width="30"
          height="42"
          name="logo"
          :class="$style['header__logo-icon']"
        />
        <svg-icon
          width="106"
          height="22"
          name="pepelane"
          :class="$style['header__logo-text']"
        />
      </NuxtLink>
      <h1 :class="$style.header__head">World's first affordable airsharing</h1>
      <button :class="$style.night__mode" class="btn">
        <svg-icon width="20" height="20" name="night-mode" />
        <span :class="$style['night__mode-text']">Night mode</span>
      </button>
      <div :class="$style.user__interface">
        <button :class="$style['user__interface-btn']" class="btn">
          <svg-icon
            :class="
              $style[('user__interface-icon', 'user__interface-icon--messages')]
            "
            width="20"
            height="18"
            name="messages"
          />
        </button>
        <button :class="$style['user__interface-btn']" class="btn">
          <svg-icon
            :class="
              $style[('user__interface-icon', 'user__interface-icon--reminder')]
            "
            width="24"
            height="24"
            name="reminder"
          />
        </button>
        <nuxt-link :class="$style[('user__profile', 'profile')]" to="/profile">
          <span :class="$style.profile__username">Bettie Prettie</span>
          <img
            width="30"
            height="30"
            alt="avatar"
            :class="$style.profile__userpic"
            src="https://s3-alpha-sig.figma.com/img/c118/7074/325ce02734f26a464a5ed82bb2d8db63?Expires=1601856000&Signature=MTR73GH6CgEXt2Tneiyvn1~nokSGyw7K8EuGBuxJlFjxFc4ap4yz37TQQYNFjzm3hTL3vy7wlpvwNwUFpqJZmR~BxJTPAPBZdxMPzbVo7-CqdKqgfTCJEv5zrZJn1pebKC8TRHXlyo4dj474vcwDqqaerzGZAtNhWBPgUOTXJ8NWSJ9pmZnYNqjL5HTUj2~7yxRbIJKE4mKLs8imIM26jZGCC8g~FKu5Ui77E46rT0r0VDVz-gB1VSRQfooEPo-Hly7LWlwcMqAhb86RkPq4RwOVpTV6kamGpFZmDzT96CEh3JHhRlQByYUfVk3kev1Q-ic6WaS-D7l~rW913X9CGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
@import '~/assets/scss/global-utils.scss';

.header {
  &__container {
    padding-top: rem(12);
    padding-bottom: rem(12);
    display: flex;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;

    &-icon {
      width: rem(20);
      min-width: rem(20);
      height: rem(28);
      transition: transform 0.5s;

      @include min-desktop {
        width: rem(30);
        min-width: rem(30);
        height: rem(42);
      }
    }

    &-text {
      width: rem(70);
      min-width: rem(70);
      height: rem(13);
      margin-left: rem(15);

      @include min-desktop {
        width: rem(105);
        min-width: rem(105);
        height: rem(21);
        margin-left: rem(25);
      }
    }

    &:hover & {
      &-icon {
        transform: rotate(360deg);
      }
    }

    &:active & {
      &-icon {
        transform: rotate(0) scale(0.7);
      }
    }
  }

  &__head {
    $color: $--light-gray;
    font-size: rem(16);
    color: $color;
    margin-left: rem(65);
    font-weight: 300;
    @include max-mobile {
      @include visually-hidden;
    }
  }
}

.profile {
  display: flex;
  align-items: center;
  $hover-color: $--main-violet;
  margin-left: rem(25);

  @include min-desktop {
    margin-left: rem(55);
  }

  &__username {
    display: none;
    user-select: none;
    @include min-tablet {
      $color: $--light-black;
      margin-right: rem(15);
      display: block;
      color: $color;
      font-weight: bold;
    }
  }

  &__userpic {
    border-radius: 50%;
    width: rem(32);
    height: rem(32);
    transition: box-shadow 0.3s;

    @include min-desktop {
      width: rem(56);
      height: rem(56);
    }
  }

  &:hover & {
    &__userpic {
      box-shadow: 0 0 rem(2) rem(5) $hover-color;
    }
  }

  &:active & {
    &__userpic {
      box-shadow: 0 0 rem(5) rem(8) $hover-color;
    }
  }
}

$icon-color: $--fill-gray;
$icon-hover-color: $--main-violet;

.user {
  &__interface {
    display: flex;

    &-btn {
      margin-left: rem(20);
      cursor: pointer;

      @include min-desktop {
        margin-left: rem(30);
      }

      svg {
        fill: $icon-color;
        transition: fill 0.3s;
      }

      &:hover {
        svg {
          fill: $icon-hover-color;
        }
      }

      &:active {
        svg {
          fill: darken($icon-hover-color, 20%);
        }
      }
    }

    &-icon {
      &--reminder {
        width: rem(20);
        min-width: rem(20);
        height: rem(20);

        @include min-desktop {
          width: rem(24);
          min-width: rem(24);
          height: rem(24);
        }
      }

      &--messages {
        width: rem(16);
        min-width: rem(16);
        height: rem(15);

        @include min-desktop {
          width: rem(20);
          min-width: rem(20);
          height: rem(18);
        }
      }
    }
  }
}

.night__mode {
  margin-left: auto;
  cursor: pointer;

  &-text {
    display: none;
    user-select: none;
    @include min-tablet {
      $color: $--light-gray;
      display: block;
      font-size: rem(16);
      color: $color;
      margin-left: rem(15);
      font-weight: 300;
    }
  }

  svg {
    fill: $icon-color;
    transition: fill 0.3s;
    width: rem(16);
    height: rem(16);
    min-width: rem(16);

    @include min-desktop {
      width: rem(20);
      height: rem(20);
      min-width: rem(20);
    }
  }

  &:hover {
    svg {
      fill: $icon-hover-color;
    }
  }

  &:active {
    svg {
      fill: darken($icon-hover-color, 20%);
    }
  }
}
</style>
