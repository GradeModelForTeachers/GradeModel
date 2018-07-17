module.exports = {
  entry: [
    './src/index.js',
  ],
  module: {
   rules: [
     {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      }
    }
   ]
 },
 resolve: {
   extensions: ['*', '.js', '.jsx',]
 },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.png'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
