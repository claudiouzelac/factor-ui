const path = require('path');

// vue.config.js
module.exports = {
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: {
      filename: 'css/[name].css',
    },

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    // modules: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    // loaderOptions: {
    //   sass: {
    //     prependData: `@import "@/shared/styles/_base.scss";`,
    //   },
    // },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // {{#if_eq build "standalone"}}
        // 'vue$': 'vue/dist/vue.esm.js',
        // {{/if_eq}}
        '@': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        // {
        //   test: /\.scss$/,
        //   loader: ['vue-style-loader', 'css-loader', 'sass-loader'],
        // },
        {
          test: /\.css$/,
          loader: ['vue-style-loader', 'css-loader'],
        },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        // },
        {
          test: /\.svg$/,
          use: ['babel-loader', 'vue-svg-loader'],
        },
      ],
    },
    entry: {
      'templates/template-block-layout': [
        './src/templates/FactorBlockTemplate/index.vue',
        './src/templates/FactorBlockTemplate/FactorBlockTemplate.scss',
      ],
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'css/[name].css',
    //   }),
    // ],
  },
};
