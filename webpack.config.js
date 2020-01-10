const webpack = require('webpack');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'entry', corejs: 2 }], '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
    // loaders: [
    //   {
    //     loader: 'babel-loader',
    //     exclude: [/(node_modules)/],
    //     query: {
    //       presets: ['es2015', 'react'],
    //       plugins: ['transform-object-rest-spread']
    //     }
    //   }
    // ]
  },
  plugins: [
    // OccurrenceOrderPlugin is needed for webpack 1.x only
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Use NoErrorsPlugin for webpack 1.x
    new webpack.NoEmitOnErrorsPlugin()
  ],
  entry: {
    index: [
      '@babel/polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
};
