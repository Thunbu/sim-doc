const path = require('path');
const rootDir = path.resolve(process.cwd(), '');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const {getEntry, htmlTemplate} = require('./tools');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webPackConfig = {
	entry: getEntry(),
	module: {
		rules: [
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
				loader: require.resolve('url-loader'),
				options: {
					limit: 10,
					name: 'assets/images/[name]_[hash].[ext]'
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10,
					name: ('assets/media/[name]_[hash].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10,
					name: ('assets/fonts/[name]_[hash].[ext]')
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
					options: {
						interpolate: true
					}
				}]
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				loader: 'babel-loader',
				options: {
					customize: require.resolve(
						'babel-preset-react-app/webpack-overrides'
					),
					plugins: [
						[require.resolve('babel-plugin-import'), {
							"libraryName": "antd",
							"libraryDirectory": "lib",
							// "style": "css" // `style: true` 会加载 less 文件
						}],
					],
					cacheDirectory: true,
					cacheCompression: true,
					compact: true,
				}
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', ".css", ".less"],
	},
	output: {
		path: rootDir + '/dist/',
		filename: "assets/js/[name]_[hash].js"
	},
	externals: {
		'electron': 'require("electron")',
	},
	plugins: [
		...htmlTemplate(),
		new MiniCssExtractPlugin({ //分离css插件
			filename: "assets/css/[name]_[hash].css",
		}),
		new CopyWebpackPlugin([
			{from: rootDir + '/src/assets/images/favicon.ico', to: rootDir + '/dist/favicon.ico'},
			// { from: rootDir + '/src/assets/font' , to: rootDir + '/dist/assets/font'},
			// { from: rootDir + '/src/assets/js' , to: rootDir + '/dist/assets/js'}
		])
	],
	optimization: {}
};

module.exports = webPackConfig;
