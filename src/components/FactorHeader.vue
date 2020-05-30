<template>
  <header class="f-header">
    <div class="f-header__column">
      <slot name="logo" v-if="!noLogo" />
      <a class="f-header__logo-link" href="/" v-if="!hasLogoSlot && !noLogo">
        <img
          src="https://www.mozilla.org/media/protocol/img/logos/mozilla/black.svg"
          class="f-header__logo"
        />
      </a>
    </div>
    <div class="f-header__column">
      <FactorSearchBar
        class="f-header__search"
        :searchBarHandler="searchBarHandler"
        :searchBarLabel="searchBarLabel"
        :searchBarValue="searchBarValue"
        :searchBarDropdown="searchBarSuggestions"
        @keyup="searchBarKeyup"
        v-on:search-bar-dropdown-clicked="searchBarDropdownClicked"
        v-on:clear-query="searchBarClearQuery"
        v-if="!hideSearchBar"
      />
    </div>
    <div class="f-header__column">
      <nav class="f-nav">
        <slot name="nav" />
      </nav>
      <div class="f-profile">
        <slot name="profile" />
      </div>
    </div>
  </header>
</template>
<script>
import FactorSearchBar from '@/components/FactorSearchBar.vue';

export default {
  name: 'FactorHeader',
  components: { FactorSearchBar },
  props: {
    hideSearchBar: {
      type: Boolean,
      default: false,
    },
    searchBarConfig: {
      type: Object,
      default: null,
    },
    noLogo: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    searchBarHandler(value) {
      if (!this.searchBarConfig.handler) {
        return;
      }
      this.searchBarConfig.handler(value);
    },
    searchBarKeyup(e) {
      if (!this.searchBarConfig.onKeyUp) {
        return;
      }
      this.searchBarConfig.onKeyUp(e);
    },
    searchBarDropdownClicked(item) {
      if (!this.searchBarConfig.onDropdownClicked) {
        return;
      }
      this.searchBarConfig.onDropdownClicked(item);
    },
    searchBarClearQuery() {
      if (!this.searchBarConfig.onClearQuery) {
        return;
      }
      this.searchBarConfig.onClearQuery();
    },
  },
  computed: {
    hasLogoSlot() {
      return !!this.$slots['logo'];
    },
    searchBarLabel() {
      if (!this.searchBarConfig.label) {
        return '';
      }
      return this.searchBarConfig.label;
    },
    searchBarValue() {
      if (!this.searchBarConfig.value) {
        return '';
      }
      return this.searchBarConfig.value;
    },
    searchBarSuggestions() {
      if (!this.searchBarConfig.suggestions) {
        return [];
      }
      return this.searchBarConfig.suggestions;
    },
  },
};
</script>
<style lang="scss">
.f-header {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5em;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-30);

  & #{&}__column {
    &:first-child {
      display: flex;
    }
    &:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    &:nth-child(3) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }

  & #{&}__logo-link {
    margin: 1em auto 1em 1em;
    padding: 0;
    border-radius: 0;
  }

  & #{&}__logo {
    display: block;
    height: 100%;
    width: auto;
  }
}

.f-nav {
  flex: 1;
}

.f-profile {
  height: 100%;
  flex: 0.2;
}
</style>
