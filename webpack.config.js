const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'development',
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'BaraGithub',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'index.js.map',
    }),
  ],
}
