const path = require('path');

module.exports = {
  entry: './src/index.js',  // 项目的入口文件
  output: {
    filename: 'bundle.js',  // 输出文件名
    path: path.resolve(__dirname, 'dist'),  // 输出文件的路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,  // 匹配所有以 .css 结尾的文件
        use: [
          'css-loader',   // 将 CSS 转换为 CommonJS 模块
        ],
      },
    ],
  },
};