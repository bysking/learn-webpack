- 初始化项目
npm init -y

- 安装cnpm，并设置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

- 安装开发打包依赖
cnpm install webpack webpack-cli -D (-D的意思是只在开发环境依赖)

webpack的默认执行路径src/index.js  项目根目录执行 npx webpack


// webpack.config.js 基础配置
let path = require('path');
module.exports = {
    entry: './src/index.js',
    mode: 'development', // production | development
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dst')
    }
}