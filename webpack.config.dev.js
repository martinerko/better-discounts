var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack-hot-middleware/client',
		'./public/src/index.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			// js
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'public')
			},
			// CSS
			{
				test: /\.styl$/,
				include: path.join(__dirname, 'public'),
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
};
