<template>
  <div :class="$style.board__menu">
    <div :class="$style.board__filter">
      Rent
      <select id="filter" name="filter" class="input">
        <option value="whatever">whatever</option>
        <option value="11">11</option>
        <option value="122">151</option>
      </select>
    </div>
    <button :class="$style.add" class="btn" type="button">
      <span :class="$style.add__text">Add New</span>
      <span :class="$style.add__btn"></span>
    </button>
  </div>
</template>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';
.board {
  &__menu {
    display: flex;
    justify-content: space-between;
  }
  &__filter {
    font-weight: bold;
    font-size: 24px;
    select {
      $color: $--main-violet;
      color: $color;
      transition: color 0.3s;
      cursor: pointer;
      &:hover {
        color: darken($color, 10%);
      }
      &:active,
      &:focus {
        color: darken($color, 20%);
      }
    }
  }
}
.add {
  $color: $--main-violet;
  cursor: pointer;
  font-weight: bold;
  color: $color;
  transition: color 0.3s;
  user-select: none;
  &:hover {
    color: darken($color, 10%);
  }
  &:focus {
    color: darken($color, 20%);
  }
  &:hover & {
    &__btn {
      box-shadow: 0 0 rem(5) rem(5) rgba($--main-violet, 0.5);
    }
  }
  &:active & {
    &__btn {
      box-shadow: 0 0 rem(5) rem(2) rgba($--main-violet, 0.5);
    }
  }
  &__btn {
    position: relative;
    display: block;
    width: rem(32);
    min-width: rem(32);
    height: rem(32);
    border-radius: rem(8);
    background-color: $--main-violet;
    margin-left: rem(12);
    transition: box-shadow 0.2s;
    @include min-tablet {
      width: rem(48);
      min-width: rem(48);
      height: rem(48);
      margin-left: rem(20);
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: rem(12);
      height: rem(2);
      background-color: $--real-white;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>
