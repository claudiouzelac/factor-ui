<template>
  <div slot="footer-links" class="link-list">
    <a
      v-for="(single, index) in links"
      v-bind:key="index"
      v-bind:href="single.link"
      class="link-list__item"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FactorIcon v-bind:id="single.icon" :width="12" :height="12" />
      <abbr class="link-text" v-if="single.abbr" v-bind:title="single.abbr">{{
        single.label
      }}</abbr>
      {{ !single.abbr ? single.label : '' }}
    </a>
  </div>
</template>
<script>
import FactorIcon from '@/components/FactorIcon.vue';

export default {
  name: 'FooterLinksExample',
  components: {
    FactorIcon,
  },
  data() {
    return {
      links: [
        {
          link: '/#test',
          icon: 'cpg',
          label: 'Test link',
          abbr: 'test-link',
        },
        {
          link: '/#test2',
          icon: 'faq',
          label: 'Test link 2',
          abbr: 'test-link-2',
        },
        {
          link: '/#test3',
          icon: 'github',
          label: 'Test link 3',
          abbr: 'test-link-3',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.link-list {
  & #{&}__item {
    color: var(--gray-40);
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    padding: 0.9em 1.5em;
    margin: 1em 0.5em;
    border-radius: 2em;
    line-height: 1;

    svg {
      margin-right: 0.75em;
      display: inline-block;
      vertical-align: middle;
      background: var(--gray-40);
      border-radius: 100%;
      color: var(--black);
      padding: 0.25em;
      box-sizing: content-box;
    }

    > .link-text {
      text-decoration: none;
    }

    &:hover {
      color: inherit;

      svg {
        background-color: var(--white);
      }
    }
  }
}
</style>
