const baseConfig = require('./webpack.config');
const path = require('path');
const webpack = require('webpack');
const deleteFolderRecursive = require('./tools').deleteFolderRecursive;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包

const setting = {
	contentBase: path.resolve(__dirname, '../src/pages'),
	hot: false,
	port: 8091,
	open: true,
	host : '0.0.0.0',
	overlay: {
		warnings: true,
		errors: true
	},
	proxy: {
		'/SSOLogin': {
			target: 'http://10.113.123.3:8102/sammboMgr/',
			pathRewrite: {'^/SSOLogin': ''}
		}
	}
};
baseConfig.devtool = '#eval-source-map';
baseConfig.output.publicPath = '/';
baseConfig.module.rules.push({
	test: /\.less$/,
	use: [
		'style-loader',
		'css-loader',
		{
			loader: "less-loader",
			options: {sourceMap: true,javascriptEnabled: true}
		}
	]
});
baseConfig.module.rules.push({
	test: /\.less$/,
	use: [
		{
			loader: MiniCssExtractPlugin.loader
		},
		{
			loader: "css-loader",
		},
		{
			loader: "less-loader",
			options: {sourceMap: true,javascriptEnabled: true}
		},
	]
});
baseConfig.devServer = setting; 					// 配置服务以及代理
baseConfig.devtool = 'cheap-module-eval-source-map'; 	// 生成source map 以供调试
baseConfig.plugins.push(new webpack.NamedModulesPlugin());
baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
baseConfig.plugins.push(
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': '"development"'
	})
);

console.log('');
console.log('');
console.log('               ----------------------------------------');
console.log('               ----------------------------------------');
console.log('               ----------------------------------------');
console.log('               ----------------DEV---------------------');
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
