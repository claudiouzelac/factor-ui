<template>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    :width="width"
    :height="height"
    class="icon"
    @click="handleIconClicked"
  >
    <template>
      <!-- <component :is="iconPath" /> -->
      <use
        :href="
          '#' +
            require(`!svg-sprite-loader?extract=false!image-webpack-loader?${`{
              svgo: {
                plugins: [
                  { removeXMLNS: true },
                  {
                    removeAttributesBySelector: {
                      selector: 'svg[class]',
                      attributes: 'class'
                    }
                  },
                ]
              }
            }`.replace(/\n/g, '')}!@/assets/svg/${id}.svg`).default.id
        "
      />
    </template>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    width: Number,
    height: Number,
    id: String,
  },
  computed: {
    // iconPath() {
    //   console.log('found: ', require(`@/assets/svg/${this.id}.svg`));
    //   return () => import(`@/assets/svg/${this.id}.svg`);
    // },
    // iconLoader() {
    //   console.log(
    //     'loading svg: ',
    //     `svg-inline-loader?classPrefix=f-i__!@/assets/svg/${this.id}.svg`,
    //   );
    //   return require(`svg-inline-loader?classPrefix=f-i__!@/assets/svg/${this.id}.svg`);
    // },
  },
  methods: {
    handleIconClicked(e) {
      this.$emit('click', e);
    },
  },
  data() {
    return {
      avatarUrl: null,
    };
  },
};
</script>

<style lang="scss">
.icon {
  fill: currentColor;
}
</style>
