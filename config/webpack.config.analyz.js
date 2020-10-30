const baseConfig = require('./webpack.config.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;




/*
*
* webpack 打包分析
*
* */



baseConfig.plugins.push(new BundleAnalyzerPlugin());







module.exports = baseConfig;
