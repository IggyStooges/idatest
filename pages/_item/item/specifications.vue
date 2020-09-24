<template>
  <div>
    <div>{{ item.specifications_text }}</div>
    <Features />
  </div>
</template>

<script>
import Features from '~~/components/Features'

export default {
  components: {
    Features,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
