<template>
  <form class="search-bar" @submit="handleSubmit" method="GET">
    <fieldset>
      <legend class="visually-hidden">search</legend>
      <div class="search-bar__fields">
        <label for="search-query" class="visually-hidden">search-input</label>
        <input
          type="text"
          id="search-query"
          name="query"
          v-model="searchQuery"
          class="search-bar__input"
          ref="searchQueryField"
          :placeholder="searchBarLabel"
          autocomplete="off"
          @keyup="handleKeyUp"
          @blur="onSearchQueryBlur"
          @focus="onSearchQueryFocus"
        />
        <button
          type="button"
          v-if="searchQuery && searchQuery.length > 0"
          @click="clearQuery"
          class="search-bar__clear-button"
        >
          <FactorIcon id="x" :width="20" :height="20" />
          <span class="visually-hidden">clear search</span>
        </button>
        <button type="submit" class="search-bar__submit">
          <FactorIcon id="search" :width="18" :height="18" />
          <span class="visually-hidden">search</span>
        </button>
      </div>
    </fieldset>
    <ul class="search-bar__dropdown" v-if="dropdownItems.length">
      <li
        :class="{
          'dropdown-item': true,
          active: focusedSuggestion === idx,
        }"
        v-for="(item, idx) in dropdownItems"
        :key="idx"
        v-on:mousedown="onDropdownItemClick(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </form>
</template>

<script>
import FactorIcon from '@/components/FactorIcon.vue';

export default {
  name: 'FactorSearchBar',
  props: {
    searchBarHandler: Function,
    searchBarLabel: {
      type: String,
      default: '',
    },
    searchBarValue: {
      type: String,
      default: '',
    },
    searchBarDropdown: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    FactorIcon,
  },
  methods: {
    arrowListener(e) {
      if (this.dropdownItems.length) {
        if (
          e.keyCode === 40 &&
          this.focusedSuggestion < this.dropdownItems.length - 1
        ) {
          e.preventDefault();
          this.focusedSuggestion += 1;
        } else if (e.keyCode === 38 && this.focusedSuggestion > 0) {
          e.preventDefault();
          this.focusedSuggestion -= 1;
        } else if (e.keyCode === 13 && this.focusedSuggestion > -1) {
          if (this.focusedSuggestion > -1) {
            e.preventDefault();
            this.$emit(
              'search-bar-dropdown-clicked',
              this.dropdownItems[this.focusedSuggestion],
            );
          } else if (this.focusedSuggestion == -1) {
            this.dropdownItems = [];
          }
        } else if (e.keyCode === 27) {
          e.preventDefault();
          this.dropdownItems = [];
        } else {
          this.focusedSuggestion = -1;
        }
      } else {
        this.focusedSuggestion = -1;
      }
    },
    onSearchQueryFocus() {
      this.$refs.searchQueryField.addEventListener(
        'keydown',
        this.arrowListener,
      );
    },
    onSearchQueryBlur() {
      this.$refs.searchQueryField.removeEventListener(
        'keydown',
        this.arrowListener,
      );
      this.dropdownItems = [];
    },
    handleSubmit(event) {
      event.preventDefault();
      if (!this.searchQuery.length > 0) {
        this.$refs.searchQueryField.focus();
      } else {
        this.$emit('close-search-bar');
      }
      this.searchBarHandler(this.searchQuery);
    },
    handleKeyUp(e) {
      if (e.keyCode !== 13) {
        this.$emit('keyup', e);
      }
    },
    clearQuery() {
      this.searchQuery = '';
      this.$refs.searchQueryField.focus();
      this.$emit('clear-query');
    },
    onDropdownItemClick(item) {
      this.$emit('search-bar-dropdown-clicked', item);
    },
  },
  watch: {
    searchBarDropdown(value) {
      this.dropdownItems = value;
    },
    searchBarValue(value) {
      this.searchQuery = value;
    },
  },
  data() {
    return {
      searchQuery: this.searchBarValue,
      focusedSuggestion: -1,
      dropdownItems: this.searchBarDropdown,
    };
  },
  mounted() {
    this.$refs.searchQueryField.focus();
  },
};
</script>

<style lang="scss">
.search-bar {
  width: 100%;
  max-width: 31em;
  position: relative;

  fieldset {
    border: 0;
    padding: 0;
  }

  & #{&}__fields {
    display: flex;
    flex-direction: row;
    position: relative;

    input,
    button[type='submit'] {
      font-size: 1.15em;
    }
  }

  & #{&}__input {
    border: 1px solid var(--gray-30);
    width: 100%;
    background-color: var(--white);
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
    padding: 0.5em 1.75em 0.5em 3em;

    &::placeholder {
      text-align: center;
    }
  }

  & #{&}__submit {
    border: 0;
    border-right: 1px solid var(--gray-30);
    appearance: none;
    background-color: var(--white);
    width: 2.5em;
    padding: 0.1em 0.5em;
    margin: 0.5em -1px 0.5em 0;
    position: absolute;
    left: 1px;
    top: 1px;
    bottom: 1px;
    transition: background-color 0.2s ease-in-out;

    img {
      vertical-align: middle;
      width: 1.15em;
    }
  }

  & #{&}__clear-button {
    background-color: var(--white);
    position: absolute;
    border: 0;
    top: 3px;
    right: 1px;
    bottom: 1px;
    width: 2em;
    padding: 0;
    line-height: 1;

    &:hover {
      color: var(--blue-60);
    }

    @media (min-width: 57.5em) {
      width: 3em;
    }
  }

  &--small {
    padding: 1em;
    max-width: none;
    background: var(--white);
    margin-bottom: 1em;
    position: fixed;
    left: 0;
    right: 0;
    top: 5em;
    z-index: var(--layerTopBar);
    box-shadow: var(--shadowCard);
  }

  & #{&}__dropdown {
    position: absolute;
    top: calc(100% - 1px);
    left: 2px;
    right: 2px;
    background: var(--white);
    border-bottom: 1px solid var(--gray-30);
    border-left: 1px solid var(--gray-30);
    border-right: 1px solid var(--gray-30);
    border-top: 1px solid var(--white);

    .dropdown-item {
      padding: 0.5em 1.75em 0.5em 3em;
      font-size: 1.15em;

      &:hover {
        background: var(--gray-20);
      }
      &.active {
        background: var(--gray-20);
      }
    }
  }

  &:focus,
  &:hover {
    .search-bar__input {
      border: 1px solid var(--blue-60);
    }

    button[type='submit'] {
      border-right: 1px solid var(--blue-60);
    }

    .search-bar__dropdown {
      border-bottom: 1px solid var(--blue-60);
      border-left: 1px solid var(--blue-60);
      border-right: 1px solid var(--blue-60);
    }
  }
}
</style>
