const config = {
  entry: {
    main: './src/app/main.jsx',
  },
  output: {
    path: './public/js',
    publicPath: '/assets/',
    filename: '[name].js',
  },
  module: {
    noParse: [new RegExp(/\.min.jsx$/)],
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  }
};

module.exports = config;
