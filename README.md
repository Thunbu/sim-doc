# 闪布

### 文件结构：
.    
+-- config       
|   |   tools.js     
|   |   webpack.config.dev.js    
|   |   webpack.config.js    
|   |   webpack.config.prod.js    
+-- src      
|   +-- assets     
|   |   +-- images     
|   |   |   +-- \*.*     
|   +-- component_js            
|   |   +-- *.js      
|   +-- component_ts           
|   |   +-- *.ts     
|   +-- pages         
|   |   +-- ***      
|   |   |   +-- index.html        
|   |   |   +-- index.js        
|   |   |   +-- index.less    
|   |   +-- index.html        
|   |   +-- index.js        
|   |   +-- index.less        
|   +-- template.html        
+-- .babelrc       
+-- .gitignore       
+-- package.json       
+-- README.md       
+-- tsconfig.json       

> *注意* pages 文件夹下的每一个都是单独一个页面，打包后的路径依然如此，不允许存在单个文件，只支持文件夹。
> 而且 单个文件夹下必须要有 index.html index.js 如果不添加index.html 则该页面的默认模版为src/template.html 文件

> 

``` 
/config 文件夹为 webpack 配置项
/src/assets         用于存放静态文件 img font 等
/src/component_js   公用的代码模块  *.js
/src/component_ts   公用的代码模块  *.ts
/src/page           生成页面的文件夹
/.babelrc           babel配置
/.gitignore         git忽略文件
/package.json       npm 模块解释文件
/README.md          该文件
/tsconfig.json      typescript配置
```
