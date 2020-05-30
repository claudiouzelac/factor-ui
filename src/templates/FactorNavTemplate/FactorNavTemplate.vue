<template>
  <div id="factor-template" class="f-template-outer nav-template">
    <nav class="f-nav">
      <slot name="logo" />
      <a class="f-nav__logo-link" href="/" v-if="!hasLogo">
        <img
          src="https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"
          class="f-nav__logo"
        />
      </a>
      <div class="f-nav__main">
        <slot name="nav" />
      </div>
    </nav>
    <main class="f-main">
      <FactorHeader :searchBarConfig="searchBarConfig" :noLogo="true">
        <template slot="profile">
          <slot name="profile" />
        </template>
      </FactorHeader>

      <div class="f-main__content">
        <slot name="main" />
      </div>
      <FactorFooter v-if="hasFooterLinks">
        <template slot="links">
          <slot name="footer-links" />
        </template>
      </FactorFooter>
    </main>
  </div>
</template>
<script>
import FactorHeader from '@/components/FactorHeader.vue';
import FactorFooter from '@/components/FactorFooter.vue';

export default {
  name: 'FactorNavTemplate',
  components: {
    FactorHeader,
    FactorFooter,
  },
  props: {
    searchBarConfig: {
      type: Object,
      default: null,
    },
  },
  computed: {
    hasLogo() {
      return !!this.$slots['logo'];
    },
    hasFooterLinks() {
      return !!this.$slots['footer-links'];
    },
  },
};
</script>
<style lang="scss">
@import '../../shared/styles/_base.scss';
@import '../../shared/styles/_nav-layout.scss';

body {
  background: var(--gray-20);
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  letter-spacing: 0.04em;
}

.f-template-outer {
  min-height: 100vh;
}
</style>
