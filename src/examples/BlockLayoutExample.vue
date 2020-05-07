<template>
  <div class="b-l" slot="main">
    <FactorPanel
      class="test-panel-third"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="test-panel-third-2"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="test-panel-third-3"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="test-panel-half"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="test-panel-half-2"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
    <FactorPanel
      class="test-panel-full"
      title="Test panel"
      :full-on-mobile="true"
    ></FactorPanel>
  </div>
</template>
<script>
import FactorPanel from '@/components/FactorPanel.vue';

export default {
  name: 'BlockLayoutExample',
  components: {
    FactorPanel,
  },
};
</script>
<style lang="scss" scoped>
@import '../shared/styles/block-layout';

.test-panel-third {
  @include thirdGridWidth(1);
}
.test-panel-third-2 {
  @include thirdGridWidth(3);
}

.test-panel-third-3 {
  @include thirdGridWidth(5);
}

.test-panel-half {
  @include halfGridWidth(1);
}
.test-panel-half-2 {
  @include halfGridWidth(4);
}

.test-panel-full {
  @include fullGridWidth();
}
</style>
