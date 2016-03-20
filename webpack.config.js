'use strict';
var webpack = require('webpack');

module.exports = function makeWebpackConfig() {

    var config = {};

    config.entry = './js/app.js';

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    };

    config.devtool = 'source-map';

    config.output = {
        path: __dirname + '/dist',
        filename: 'tamarin.js'
    };

    return config;
}();
