<template>
  <ul class="nav-list">
    <li
      class="nav-list__item"
      v-for="(item, idx) in ['on', 'two', 'three']"
      :key="idx"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NavExample',
};
</script>
<style lang="scss">
.nav-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & #{&}__item {
    margin: 0 1em;
  }
}
</style>
