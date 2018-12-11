const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, args) => ({
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        exclude: /node_modules/,
        loader: 'file-loader?name=assets/images/[name].[hash].[ext]'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: args.mode !== 'production'
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
})
