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
  },
  computed: {
    hasLogo() {
      return !!this.$slots['logo'];
    },
  },
};
