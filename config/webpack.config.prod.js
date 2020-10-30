const baseConfig = require('./webpack.config');
const deleteFolderRecursive = require('./tools').deleteFolderRecursive;
const webpack = require('webpack');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const manifestFile = require('../manifest');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包

baseConfig.module.rules.push({
	test: /\.tsx?$/,
	use: "ts-loader",
});
baseConfig.optimization.minimize = true;
baseConfig.output.publicPath = './';
const cacheGroups = {};
manifestFile.split.map((item) => {
	const fileName = `assets/js/${item.fileName}_[hash].js`;
	cacheGroups[item.name] = {
		test: new RegExp(item.reg, 'i'),
		priority: -10,
		name: item.name,
		reuseExistingChunk: true,
		enforce: true,
		filename: fileName
	}
});
const splitChunks = {
	chunks: 'all',
	name: true,
	cacheGroups: {
		default: false,
		...cacheGroups
	}
};
baseConfig.optimization.splitChunks = splitChunks;
baseConfig.module.rules.push({
	test: /\.less$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: '../../'
			}
		},
		{
			loader: "css-loader",
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: () => [require('autoprefixer')({
					'browsers': ['> 1%', 'last 2 versions']
				})],
			}
		},
		{
			loader: "less-loader",
			options: {sourceMap: true,javascriptEnabled: true}
		},
	]
});
baseConfig.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': '"production"'
	})
);
baseConfig.plugins.push(
	new OptimizeCSSAssetsPlugin({})
);
console.log('');
console.log('');
console.log('               ----------------------------------------');
console.log('               ----------------------------------------');
console.log('               ----------------------------------------');
console.log('               ----------------PROD--------------------');
console.log('               ----------------------------------------');
console.log('               ----------------------------------------');
console.log('               ----------------------------------------');
console.log('');
console.log('');
console.log('');
console.log('');
console.log('');
deleteFolderRecursive('./dist');
module.exports = baseConfig;
