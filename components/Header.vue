<template>
  <header>
    <div :class="$style.header__container">
      <svg :class="$style.logo"></svg>
      <span>World's first affordable airsharing</span>
      <button :class="$style.night__mode">
        <span class="visually-hidden">Night mode</span>
      </button>
      <div :class="$style.user__interface">
        <button>...</button>
        <button class="reminder">reminder</button>
        <div :class="$style.user__profile">
          <span :class="$style.profile__username">Bettie Prettie</span>
          <img src="" width="30" height="30" alt="" class="profile__userpic" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" module>
@import '~/assets/scss/global-styles.scss';
.logo {
  width: 113px;
  height: 32px;

  @include min-tablet {
    width: 170px;
    height: 48px;
  }
}
.profile__username {
  display: none;

  @include min-tablet {
    display: block;
  }
}
.header__container {
  display: flex;
}
.user__profile {
  display: flex;
}
.user__interface {
  margin-left: 10px;
  display: flex;
}
.night__mode {
  margin-left: auto;
}
</style>

<script>
export default {
  props: {
    user: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
