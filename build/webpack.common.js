 const path = require('path');
 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
 module.exports = {
   entry: {
     app: '../src/index.js'
   },
   plugins: [
    new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      // template: resolve('../src/index.html'),
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   module: {
         rules: [
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader']
           }
         ]
       },
 };