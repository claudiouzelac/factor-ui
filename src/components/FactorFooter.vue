<template>
  <footer class="f-footer">
    <slot name="links" />
    <!-- Eventually we will need a space for extra content here -->
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.f-footer {
  margin-top: 2em;
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  padding: 2em 0;
}
</style>
