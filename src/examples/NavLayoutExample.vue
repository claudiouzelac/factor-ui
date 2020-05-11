<template>
  <div class="n-l" slot="main">
    <FactorPanel
      class="n-l__panel"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="n-l__panel"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="n-l__panel"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
  </div>
</template>
<script>
import FactorPanel from '@/components/FactorPanel.vue';

export default {
  name: 'NavLayoutExample',
  components: {
    FactorPanel,
  },
};
</script>
<style lang="scss" scoped>
@import '../shared/styles/_nav-layout.scss';

.n-l__panel {
  flex: 1;
}
</style>
