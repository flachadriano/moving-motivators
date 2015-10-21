var path = require('path');
var webpack = require('webpack');
var nodeDir = __dirname + '/node_modules';

var config = {
  entry: {
    main: './src/main.jsx',
  },
  output: {
    path: './public/js',
    publicPath: '/assets/',
    filename: '[name].js',
  },
  module: {
    noParse: [new RegExp(/\.min.jsx$/)],
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader' },
    ],
  }
};

module.exports = config;
