var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
    context: path.join(__dirname),
    entry: 'index',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
            },
            {
              test: /\.css$/,
              include: APP_DIR,
              loaders: [
                  require.resolve('style-loader'),
                  require.resolve('css-loader'),
              ],
            },
            {
              test:/\.scss$/,
              include: APP_DIR,
              loaders: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
                require.resolve('sass-loader'),
              ]
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=8192'
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'client'),
            'node_modules'
        ]
    }
};

module.exports = config;
