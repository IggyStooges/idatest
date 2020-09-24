<template>
  <div :class="$style.terms">
    <p>{{ item.term_text.split(`.`, 1).join() }}</p>

    <p>{{ item.term_text.split(`.`, 3).join(`.`) }}</p>

    <h3>Additional conditions:</h3>

    <ul>
      <li>
        {{ item.term_text.split(`.`, 3).join(`.`) }}
      </li>
      <li>
        {{ item.term_text.split(`.`, 1).join(`.`) }}
      </li>
      <li>
        {{ item.term_text.split(`.`, 4).join(`.`) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';

.terms {
  p {
    margin: rem(8) 0;
  }

  h3 {
    $color: $--light-black;

    font-weight: bold;
    font-size: rem(16);
    color: $color;
    margin-top: rem(24);
    margin-bottom: rem(24);
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      position: relative;
      padding: 0 0 rem(8) rem(15);

      &::before {
        $background: $--main-pink;

        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: rem(8);
        width: rem(4);
        height: rem(4);
        border-radius: 50%;
        background-color: $background;
      }
    }
  }
}
</style>
