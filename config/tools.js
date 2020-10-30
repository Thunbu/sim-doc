const fs = require("fs");
const path = require('path');
const rootDir = path.resolve(process.cwd(), '');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const copyDir = (src, dist, callback) => {
	fs.access(dist, function(err){
		if(err){
			// 目录不存在时创建目录
			fs.mkdirSync(dist);
		}
		_copy(null, src, dist);
	});

	function _copy(err, src, dist) {
		if(err){
			callback(err);
		} else {
			const paths = fs.readdirSync(src);
			paths.forEach(function(path) {
				var _src = src + '/' +path;
				var _dist = dist + '/' +path;
				const stat = fs.statSync(_src);
				fs.stat(_src);
				if(stat.isFile()) {
					fs.writeFileSync(_dist, fs.readFileSync(_src));
				} else if(stat.isDirectory()) {
					// 当是目录是，递归复制
					copyDir(_src, _dist, callback)
				}
			})
		}
	}
};
const fileRootPath = rootDir + '/src/pages/';
const htmlDefaultConfig = {
	meta: {
		keywords: '',
		description: ''
	},
	// hash: true,
	inject: true,
	minify: {
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		useShortDoctype: true
	},
};
const deleteFolderRecursive = (path) => {
	if (fs.existsSync(path)) {
		fs.readdirSync(path).forEach(function(file, index){
			const curPath = path + "/" + file;
			if (fs.lstatSync(curPath).isDirectory()) { // recurse
				deleteFolderRecursive(curPath);
			} else {
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};
const movePublicDirectoryToDist = function(){
	fs.mkdirSync(rootDir + '/dist');
	copyDir(rootDir + '/src/pages/public/', rootDir + '/dist/public/');
};
const getAllFiles = () => fs.readdirSync(fileRootPath);
const tools = {
	deleteFolderRecursive,
	movePublicDirectoryToDist,
	htmlTemplate: () => {
		const htmlList = [];
		getAllFiles().map((item) => {
			if(item !== 'assets'){
				const Path = fileRootPath + item;
				const stats = fs.statSync(Path);
				const templatePath = rootDir + '/src/template.html';
				let resultPath = '';
				let configJson = '';
				const chunksJs = [];
				if(stats.isDirectory() && fs.existsSync(Path)){
					resultPath = Path + '/index.html';
					configJson = Path + '/manifest.json';
					chunksJs.push(item);
					if(!fs.existsSync(resultPath)){
						resultPath = templatePath
					}
					if(fs.existsSync(configJson)){
						const configFile = JSON.parse(fs.readFileSync(configJson).toString());
						if(configFile.link){
							configFile.link.map((item) => {
								chunksJs.push(item);
							});
						}
					}
					const params = {
						...htmlDefaultConfig,
						chunks: chunksJs, //引入的js
						template: resultPath,
						filename: `${item}.html`, //html位置
					};
					htmlList.push(new HtmlWebpackPlugin(params));
				}
			}
		});
		const indexConfigJson = path.join(rootDir + '/src/pages/manifest.json');
		const indexChunk = [`index`];
		if(fs.existsSync(indexConfigJson)){
			const configFile = JSON.parse(fs.readFileSync(indexConfigJson).toString());
			if(configFile.link){
				configFile.link.map((item) => {
					indexChunk.push(item);
				});
			}
		}
		htmlList.push(new HtmlWebpackPlugin({
			...htmlDefaultConfig,
			chunks: indexChunk, //引入的js
			template: fileRootPath + '/index.html',
			filename: `index.html`, //html位置
		}));
		console.log(indexChunk, indexConfigJson);
		return htmlList;
	},
	getEntry: () => {
		const obj = {};
		getAllFiles().map((item) => {
			if(item !== 'assets'){
				const currentPath = fileRootPath + item;
				const stats = fs.statSync(currentPath);
				if(stats.isDirectory()){
					obj[item] = currentPath + '/index.js';
				}
				if(stats.isFile() && fs.existsSync(currentPath) && /\.js$/.test(currentPath)){
					obj['index'] = currentPath;
				}
			}
		});
		return obj;
	}
};
module.exports = tools;
