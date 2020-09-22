const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'last.js',
    path: path.join(__dirname, 'bundle')
  }
}