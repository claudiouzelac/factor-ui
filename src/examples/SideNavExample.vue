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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 0 0 1em;
  background: var(--white);
  height: 100%;

  & #{&}__item {
    margin: 1em 0;
  }
}
</style>
