const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'finder-json.bundle.js',
    library: 'fjson',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: ['.js']
  }
};