const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'flow-connect': './src/flow-connect.ts',
    'flow-connect.min': './src/flow-connect.ts',
    'standard-nodes': {
      import: './src/standard-nodes/index.ts',
      dependOn: 'flow-connect'
    },
    /* 'standard-nodes.min': {
      import: './src/standard-nodes/index.ts',
      dependOn: 'flow-connect'
    } */
  },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: true,
      include: /\.min\.js$/
    })]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}