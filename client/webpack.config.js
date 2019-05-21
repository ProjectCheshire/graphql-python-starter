'use strict';
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
     path: path.resolve(__dirname, 'dist'),
    filename: "[name].pack.js",
    publicPath: '/'
  },
      // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
           {
            loader:'file-loader',
            options: {}
          }
        ]
           // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      { 
         test: /\.js?$/,
         use: {
                  loader: "babel-loader"
                }, 
         resolve: { extensions: [".js", ".jsx"] },
         exclude: /node_modules/ ,
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }
    ]
  },
  entry: {
    index: "./src/index.js"
  },
  devServer:{
    historyApiFallback: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname +'/public/index.html',
      favicon: __dirname + '/public/favicon.ico',
      manifest: __dirname + '/public/manifest.json',
      filename:'index.html',
      inject: 'body',
    })
  ]
};