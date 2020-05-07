<template>
  <article :class="{ panel: true, 'full-on-mobile': fullOnMobile }">
    <slot name="meta"></slot>
    <header class="panel__header" v-if="!hideContent && hasTitle">
      <h2>{{ title }}</h2>
      <slot name="header"></slot>
    </header>
    <div
      v-if="!hideContent"
      :class="{ panel__content: true, full: fullContent }"
    >
      <slot name="content"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    fullContent: {
      type: Boolean,
      default: false,
    },
    fullOnMobile: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    hideContent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasTitle() {
      return this.title !== '';
    },
  },
};
</script>

<style lang="scss">
.panel {
  border: 4px solid var(--gray-50);
  background: var(--white);
  margin: 0 0 2em;
  overflow: visible;
  border-radius: var(--cardRadius);
  position: relative;

  @supports (--key: value) {
    border: none;
    box-shadow: var(--shadowCard);
  }

  &.full-on-mobile .panel__content {
    padding: 0;

    &:not(.full) {
      @media (min-width: 35em) {
        padding: 1.5em;
      }
    }
  }

  & #{&}__header {
    padding: 1.5em;
    border-bottom: 1px solid var(--gray-30);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      margin: 0;
      width: 100%;

      @media (min-width: 35em) {
        margin: 0;
        width: auto;
      }
    }
  }

  & #{&}__content:not(.full) {
    padding: 1.5em;
  }
}
</style>
