module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
	  {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
	  {
		test: /\.(jpg|png|svg|jpeg)$/,
		loader: 'file-loader',
		options: {
		  name: '[path][name].[hash].[ext]',
		},
	  }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist'
  }
};