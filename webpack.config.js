const path = require('path');

console.log('======================');
console.log(`start ${process.env.NODE_ENV} build...`);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src', 'App.tsx'),
  devtool: 'inline-source-map',
  target: ['web', 'es5'],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'App.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
