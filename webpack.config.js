module.exports = {
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
