const path = require('path')
module.exports = {
  mode: "development", // 打包模式
  entry: {
    main: './src/index.js'  // 打包主入口
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist2')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            limit: 10240,
            outputPath: 'images/',
            fallback: 'file-loader'
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          { loader: "postcss-loader" },
        ]
      }
    ]
  }
}