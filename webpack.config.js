'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpackPort, entryPointPath, distDirPath, htmlTemplatePath } = require('./config');

const getPath = (file) => {
  return path.join(__dirname, file)
};


module.exports = {
    resolve: {
      modules: [
        getPath('app'),
        getPath('node_modules'),
      ],
    },
    devtool: 'eval-source-map',
    entry: [
        `webpack-dev-server/client?http://localhost:${webpackPort}`,
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        getPath(entryPointPath)
    ],
    output: {
        path: getPath(distDirPath),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: getPath(htmlTemplatePath),
          inject: 'body',
          filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        loaders: [
            {
              test: /\.js$/,
              enforce: 'pre',
              exclude: /(node_modules|bower_components|\.spec\.js)/,
              use: [
                {
                  loader: 'eslint-loader',
                  options: {
                    configFile: getPath('.eslintrc'),
                    ignorePath: getPath('.eslintignore'),
                    failOnWarning: false,
                    failOnError: false
                  }
                }
              ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json?$/,
                loader: 'json-loader'
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass'
            },
            { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file' }
        ]
    }
};
