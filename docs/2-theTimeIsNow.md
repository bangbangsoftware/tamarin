The time is now
===============

It's Feb 2016 and angular 2 (A2) is not out of beta, material design is looking 
good, but not out for A2. I want to use A2, but it's just not here yet. So I 
think I'm gonna stick to angular 1.5, try and make it match A2. I most likely 
use purely npm, no bower, with jspm and Babel as I know them.

So...

```bash
npm install jspm --save-dev
ln -s ./node_modules/.bin/jspm jspm
./jspm init
```
And default answers for all the questions

```bash

./jspm install angular
./jspm install angular-material

```
No, STOP! I've just converted a ec5/bower/npm/grunt project at work to webpack
ec6 and still using bower as it became apparent that npm is all about server 
side which mainly will work with the client as well. However if you are using
fabricjs only in the frontend, then bower will get it without 'net', 'fs' or
'canvas' dependencies, where as npm can leave you compiling c libs and leave
you in dependency hell . I think its the way forward so, I'm gonna ditch jspm
and go for webpack, so ignore the above and do it more like....

```bash 
npm uninstall jspm -D
rm jspm
npm i webpack -D
ln -s ./node_modules/.bin/webpack webpack
./webpack init
npm i angular -D
npm i angular-material -D
npm i babel -D
npm i babel-loader -D
npm i sass-loader -D
npm i babel-preset-es2015 -D
npm i babel-core -D

```

I'm going to leave it like this for now, I just check the package.json file and
it had a load of jspm stuff in, which I just deleted in vim and now it looks 
like:

```json
{
  "devDependencies": {
    "angular": "^1.5.2",
    "angular-material": "^1.0.6",
    "babel": "^6.5.2",
    "babel-core": "^6.7.2",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "node-sass": "^3.4.2",
    "sass-loader": "^3.2.0",
    "webpack": "^1.12.14"
  }
}
```
Also got rid of config.js, jspm_packages  and created a simple webpack.config.js
like so:

```js
'use strict';
var webpack = require('webpack');

module.exports = function makeWebpackConfig () {

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

  config.devtool: 'source-map';

  config.output =  {
    path: __dirname + '/dist',
    filename: 'tamarin.js'
  };

  return config;
}();
```

I've set up the project to use sass, even though I've never used it before, as 
a ux friend of mine, tells me it's well worth a look. Anyhow code, here's the
start, ./src/app.js :

```js
import angular from 'angular';
import 'angular-material';

import 'node_modules/angular-material/angular-material.scss';

angular.module('tam', ['angular-material']);
```

and with a ./webpack it builds, but to see it, I'll do some markup:

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Mick Carter's example code..</title>
    <script src="dist/tam.js"></script>
</head>

<body ng-app="tam" layout="column">
    <md-tool-bar>
        <h1>Agile Tamarin</h1>
    </md-tool-bar>

    <div class="container" layout="row" flex>
        <md-sidenav md-is-locked-open="true" class="lightblue">
            Side Nav
        </md-sidenav>
        <md-content id="content" class="lightgreen" flex>
            Content
        </md-content>
    </div>
</body>

</html>```

and npm webpack-dev-server (and put sym link in:
ln -s node_modules/.bin/webpack-dev-server .) and add this to package.json:

```json
...
"author": "Mick Carter",
"license": "MIT",
"scripts": {
    "server": "./webpack-dev-server --history-api-fallback --inline --progress",
    "start": "npm run server"
}
...
```

then npm start and the server comes up....
