'use strict';
var webpack = require('webpack');
var path = require("path");

module.exports = function makeWebpackConfig() {

    var config = {};

    config.entry = './js/app.js';

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: [/node_modules/, /bower_components/],
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader"
        }]
    };

    config.devtool = 'source-map';

    config.output = {
        path: __dirname + '/dist',
        filename: 'tamarin.js'
    };

//    config.resolve = {
//        root: [path.join(__dirname, "bower_components")]
//    };
//    config.plugins = [new webpack.ResolverPlugin(
//        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
//    )];

    return config;
}();
