 const path = require('path');
 const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: '../src/client.js'
   },
   plugins: [
    new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      template: '../src/index.html',
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
           },
           {
            test: /\.(js|ts|tsx|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
         ]
       },
       resolve: {
        extensions: [ '.tsx', '.ts', '.js','.jsx' ],
        alias: {
          '@configs': path.join(__dirname, '../src/configs'),
          '@app': path.join(__dirname, '../src'),
          '@actions': path.join(__dirname, '../src/redux/actions'),
          '@reducers': path.join(__dirname, '../src/redux/reducers'),
          '@apis': path.join(__dirname, '../src/apis'),
          '@components': path.join(__dirname, '../src/components'),
          '@configs': path.join(__dirname, '../src/configs'),
          '@ajax': path.join(__dirname, '../src/configs/ajax.js'),
          '@reg': path.join(__dirname, '../src/configs/regular.config.js'),
          '@images': path.join(__dirname, '../src/images'),
          '@middleware': path.join(__dirname, '../src/middleware'),
          '@pages': path.join(__dirname, '../src/pages'),
          '@styles': path.join(__dirname, '../src/styles'),
          '@tableList': path.join(__dirname, '../src/components/tableList/tableList.js'),
        }
      },
 };