const path =require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname,'src','client','index.js'),
    output: {
      path: path.join(__dirname, 'build', 'client'),
      filename: 'index.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
      modules: [ path.resolve(__dirname, 'src'), 'node_modules']

    },
  devServer:{
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src', 'client', 'index.html')
    })
  ]
};