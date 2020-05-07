<template>
  <div class="profile-example" slot="profile">
    <img src="../assets/default-profile.png" class="profile-example__image" />
  </div>
</template>
<script>
export default {
  name: 'ProfileExample',
};
</script>
<style lang="scss" scoped>
.profile-example {
  margin: 1em;
  height: calc(100% - 2em);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & #{&}__image {
    display: block;
    height: 100%;
    max-width: 100%;
  }
}
</style>
