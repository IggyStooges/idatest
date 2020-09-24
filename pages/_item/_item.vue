<template>
  <div>
    <main>
      <div :class="$style['item__container']" class="container">
        <div :class="$style['item__img-container']">
          <img :src="item.image" :alt="item.name" width="712" height="700" />
        </div>
        <div :class="$style['item__content']">
          <h2 :class="$style['item__name']">
            {{ item.name.toLowerCase() }}
          </h2>

          <ItemNav :path="item.name" />

          <div>
            <nuxt-child :item="item" />
          </div>

          <ItemRentNow :rent="item.rent" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemNav from '~~/components/ItemNav'
import ItemRentNow from '~~/components/ItemRentNow'

export default {
  components: {
    ItemNav,
    ItemRentNow,
  },
  async asyncData({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentItem', { route })
    } catch (err) {
      return error({
        statusCode: 404,
        message: 'Ошибка',
      })
    }
  },
  computed: {
    ...mapState({
      item: 'currentItem',
    }),
  },
  head() {
    return {
      title: this.item.cSlug,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.item.cMetaDescription,
        },
      ],
    }
  },
}
</script>

<style lang="scss" module>
@import '~~/assets/scss/global-utils.scss';

.detail__nav-link {
  color: red;
}
.item {
  &__container {
    padding-bottom: rem(15);
    @include min-desktop {
      display: flex;
    }
  }

  &__img-container {
    border-radius: rem(16);
    overflow: hidden;
    height: rem(330);
    position: relative;

    @include min-desktop {
      min-width: 55%;
      height: auto;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: auto;

      @include min-desktop {
        width: 100%;
      }
    }
  }

  &__content {
    $color: $--light-gray;

    margin-top: rem(15);
    font-style: normal;
    font-weight: 300;
    font-size: rem(14);
    line-height: rem(20);
    color: $color;
    padding-bottom: rem(110);

    @include min-desktop {
      padding-left: rem(60);
      padding-bottom: 0;
    }
  }

  &__name {
    $color: $--light-black;

    text-transform: capitalize;
    font-weight: bold;
    font-size: rem(24);
    line-height: rem(29);
    color: $color;

    @include min-desktop {
      font-size: rem(40);
      line-height: rem(48);
    }
  }
}
</style>
