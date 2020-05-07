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
  </form>
</template>

<script>
import FactorIcon from '@/components/FactorIcon.vue';

export default {
  name: 'SearchBar',
  props: {
    searchBarHandler: Function,
    searchBarLabel: {
      type: String,
      default: '',
    },
  },
  components: {
    FactorIcon,
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      if (!this.searchQuery.length > 0) {
        this.$refs.searchQueryField.focus();
      } else {
        this.$emit('close-search-bar');
      }
      this.searchBarHandler(this.searchQuery);
    },
    clearQuery() {
      this.searchQuery = '';
      this.$refs.searchQueryField.focus();
      this.$emit('clear-query');
    },
  },
  data() {
    return {
      searchQuery: '',
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

  fieldset {
    border: 0;
    padding: 0;
  }

  & #{&}__fields {
    display: flex;
    flex-direction: row;
    position: relative;

    &:focus .search-bar__input,
    &:hover .search-bar__input {
      border: 1px solid var(--blue-60);
    }

    &:focus button[type='submit'],
    &:hover button[type='submit'] {
      border-right: 1px solid var(--blue-60);
    }

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
    padding: 0.5em;
    margin-right: -1px;
    position: absolute;
    left: 1px;
    top: 1px;
    bottom: 1px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--gray-20);
    }

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
}
</style>
