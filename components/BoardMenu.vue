<template>
  <div class="board-menu">
    <div class="filter">
      Rent
      <select id="filter" name="filter">
        <option value="whatever">whatever</option>
        <option value="11">11</option>
        <option value="122">151</option>
      </select>
    </div>
    <button class="add-new">
      <span class="add-new__text">Add New</span>
      <span class="add-new__btn"></span>
    </button>
  </div>
</template>

<style module>
.board-menu {
  display: flex;
  justify-content: space-between;
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
