var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./public/src/index.js'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': "'production'"
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
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
