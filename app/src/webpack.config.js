var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin =require('extract-text-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");


var isProduction = function(){
	return process.env.NODE_ENV === 'production';
};

var devConfig = {
	cache: true,
	entry: {
		index: './js/main.js',
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname,'../static/js'),
	},
	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel?presets[]=es2015&presets[]=react',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/,
        		loader: 'url?limit=8024&name=images/[name].[ext]'
			},
			{
		        test: /\.html$/,
       			loader: 'url?name=[name].[ext]'
			}

		]
	},
	resolve: {
		root: __dirname,
		extensions: ['','.js','.jsx','scss','css','png','jpg','jpeg'],
		alias: {
			'react': path.join('node_modules','/react/react.js'),
			'jquery': path.join('node_modules','/jquery/dist/jquery'),
			'react-dom': path.join('node_modules','/react-dom/dist/react-dom'),
		}
	},
	plugins: [
	  new webpack.NoErrorsPlugin(),
	  new webpack.optimize.OccurenceOrderPlugin(),
	  new ExtractTextPlugin("../static/css/[name].css"),
	  new CommonsChunkPlugin("common.js",['main','banner','main','search']),

	],
	devtool: isProduction()?null:'source-map',
}; 

module.exports = devConfig;