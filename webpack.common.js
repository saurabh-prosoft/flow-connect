import path from 'path';
import { fileURLToPath } from 'url';

export default {
  entry: {
    'flow-connect': './src/flow-connect.ts',
    'standard-nodes': {
      import: './src/standard-nodes/index.ts',
      dependOn: 'flow-connect'
    }
  },
  output: {
    path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.common.json'
        }
      }],
      exclude: /node_modules/
    }]
  }
}
