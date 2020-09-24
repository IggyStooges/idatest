<template>
  <div>
    <main>
      <div class="container">
        <Board :items="items" />
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Board from '~~/components/Board'

export default {
  components: {
    Board,
  },
  async asyncData({ app, route, params, error, store }) {
    try {
      await store.dispatch('getItemsList')
    } catch (err) {
      return error({
        statusCode: 404,
        message: 'Ошибка',
      })
    }
  },
  computed: {
    ...mapState({
      items: 'itemsList',
    }),
  },
}
</script>
