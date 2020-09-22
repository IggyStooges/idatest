<template>
  <ul class="items-list">
    <li v-for="item in items" :key="item.index">
      <nuxt-link :to="`/item/${item.cSlug}`">
        <img :src="item.cImage" />
        <div>
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <span>{{ item.price }}</span>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<style>
.userpic {
  border-radius: 50%;
}
.items-list {
  list-style: none;
  display: flex;
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
