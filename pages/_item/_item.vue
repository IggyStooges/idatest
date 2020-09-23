<template>
  <div>
    <h3>Foo A</h3>
    <ul>
      <li>
        <NuxtLink :to="`/item/${item.cSlug}/team`" :class="['active-link']">
          team
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/item/${item.cSlug}/speca`">speca</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/item/${item.cSlug}/term`">term</NuxtLink>
      </li>
    </ul>
    <div class="">
      sdgsdsdgf
      <ul>
        <li>1515551515</li>
      </ul>
    </div>
    <div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
@import '~~/assets/scss/global-styles.scss';
.detail__nav-link {
  color: red;
}
</style>
