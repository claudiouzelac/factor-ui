<template>
  <div id="factor-template" class="f-template-outer block-template">
    <FactorHeader
      :searchBarHandler="searchBarHandler"
      :searchBarLabel="searchBarLabel"
      :searchBarValue="searchBarValue"
    >
      <template slot="logo" v-if="hasLogo">
        <slot name="logo" />
      </template>
      <template slot="nav">
        <slot name="nav" />
      </template>
      <template slot="profile">
        <slot name="profile" />
      </template>
    </FactorHeader>
    <main class="f-main">
      <slot name="main"></slot>
    </main>
    <FactorFooter>
      <template slot="links">
        <slot name="footer-links" />
      </template>
    </FactorFooter>
  </div>
</template>
<script>
import FactorHeader from '@/components/FactorHeader.vue';
import FactorFooter from '@/components/FactorFooter.vue';

export default {
  name: 'FactorBlockTemplate',
  components: {
    FactorHeader,
    FactorFooter,
  },
  props: {
    searchBarHandler: {
      type: Function,
      default: () => {},
    },
    searchBarLabel: {
      type: String,
      default: '',
    },
    searchBarValue: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasLogo() {
      return !!this.$slots['logo'];
    },
  },
};
</script>
<style lang="scss">
@import '../../shared/styles/_base.scss';
@import '../../shared/styles/_block-layout.scss';

body {
  background: var(--gray-20);
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  letter-spacing: 0.04em;
}

.f-template-outer {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
