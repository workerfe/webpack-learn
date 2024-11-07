module.exports = {
  mode: "production",
  entry: './src/index.ts',  // 项目的入口文件
  output: {
    filename: 'build.js',  // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};