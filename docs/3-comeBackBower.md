When the server came up
=======================

Chrome is crying over angular-material, I'm going to give bower a try:

```bash

npm uninstall angular-material -D
npm i bower -D
npm i live-server -D
ln -s ./node_modules/.bin/bower .
ln -s ./node_modules/.bin/live-server .
./bower init 
./bower install angular-material 

```

And add to webpack.config.js:

```js
...
    exclude: [/node_modules/, /bower_components/],
...
    config.resolve = {
        root: [path.join(__dirname, "bower_components")]
    };
    config.plugins = [new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )];

```

And change the mark up to match
