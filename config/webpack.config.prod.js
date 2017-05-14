const webpack = require('webpack')
const paths = require('./paths')

const nodeEnv = process.env.NODE_ENV || 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: paths.CLIENT_SRC,
  entry: './index.jsx',
  output: {
    filename: 'bundle.[hash].js',
    path: paths.CLIENT_DIST,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(nodeEnv) } }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.CLIENT_SRC}/index.html`,
      hash: false,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[hash].css'),
  ],
}
