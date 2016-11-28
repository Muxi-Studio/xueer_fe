const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Dashboard = require('webpack-dashboard')
const DashboardPlugin = require('webpack-dashboard/plugin')
const dashboard = new Dashboard()

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: ['./src/js/main.js','webpack-hot-middleware/client'],
		banner: ['./src/js/banner.js','webpack-hot-middleware/client'],
		comment: ['./src/js/comment.js','webpack-hot-middleware/client'],
		search: ['./src/js/search.js','webpack-hot-middleware/client'],
    star: ['./src/js/star.js','webpack-hot-middleware/client'],
		register: ['./src/js/register.js','webpack-hot-middleware/client']
  },
  output: {
    path: path.join(__dirname,'static'),
    filename: "[name].bundle.js",
    publicPath: 'http://localhost:3000/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
	      exclude: /node_modules/,
	      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ],
  },
  resolve: {
		extensions: ['','.js','.jsx','scss','css','png','jpg','jpeg']
	},
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].bundle.css'),
    new DashboardPlugin(dashboard.setData)
  ]
}
