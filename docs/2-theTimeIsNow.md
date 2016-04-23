The time is now
===============

It's Feb 2016 and angular 2 (A2) is not out of beta, material design is looking 
good, but not out for A2. I want to use A2, but it's just not here yet. So I 
think I'm gonna stick to angular 1.5, try and make it match A2. I most likely 
use purely npm, no bower, with webpack and Babel as I know them. So I did this
to start with:

```bash
npm i webpack -D
ln -s ./node_modules/.bin/webpack webpack
./webpack init
```
Answered the init questions and installed a load of stuff with npm and with the
-D switch so they all get stored in package.json which now looks like:

```json
{
  "name": "taz",
  "version": "1.0.0",
  "description": "Agile tool",
  "main": "js/app.js",
  "scripts": {
    "build": "rimraf dist && webpack --bail --progress --profile",
    "server": "webpack-dev-server --history-api-fallback --inline --progress",
    "test": "karma start",
    "test-watch": "karma start --auto-watch --no-single-run",
    "start": "npm run server"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@angular/router": "^0.2.0",
    "angular": "^1.5.3",
    "angular-animate": "^1.5.3",
    "angular-aria": "^1.5.3",
    "angular-material": "^1.0.7",
    "angular-messages": "^1.5.5",
    "angular-ui-router": "^0.2.18",
    "babel-core": "^6.7.6",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "material-design-icons": "^2.2.3",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1"
  }
}
```

```js
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

    return config;
}();
```

I've set up the project to use sass, even though I've never used it before, as 
a ux friend of mine, tells me it's well worth a look. 
