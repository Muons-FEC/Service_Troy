var path = require('path');
var SRC_Dir = path.join(_dirname, '/client');
var DEST_Dir = path.join(_dirname, '/public');

module.exports = {
  entry: `${SRC_Dir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DEST_Dir
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_Dir,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}