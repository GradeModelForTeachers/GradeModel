module.exports = {
  entry: [
    './src/index.js'
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
    filename: 'bundle.js'
  },
};
