
module.exports = {
  mode: 'production',
  entry: './src/index.ts',  // 项目的入口文件
  output: {
    filename: 'build.js',  // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.js$|\.ts$/,  // 匹配所有以 .css 结尾的文件
        use: [
          'babel-loader',   // 将 CSS 转换为 CommonJS 模块
        ],
      },
    ],
  },
};