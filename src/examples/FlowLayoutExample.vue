<template>
  <div class="f-l" slot="main">
    <FactorPanel
      class="f-l__panel"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="f-l__panel"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="f-l__panel"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
  </div>
</template>
<script>
import FactorPanel from '@/components/FactorPanel.vue';

export default {
  name: 'FlowLayoutExample',
  components: {
    FactorPanel,
  },
};
</script>
<style lang="scss" scoped>
@import '../shared/styles/_flow-layout.scss';

.f-l__panel {
  flex: 1;
}
</style>
