<template>
  <div>
    <p>{{ item.term_text.split(`.`, 1).join(`.`) }}</p>
    <SpecialistsList />
    <p>{{ item.term_text.split(`.`, 2).join(`.`) }}</p>
  </div>
</template>

<script>
import SpecialistsList from '~~/components/SpecialistsList'

export default {
  components: {
    SpecialistsList,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
