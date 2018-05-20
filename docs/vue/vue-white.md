# vue打包空白问题

需要将config/index.js改为下面

``` json
build: {
    assetsPublicPath: './'
}
```

build/utils.js增加

``` js
function generateLoaders (options) {
    ...
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        // 写改css中的路径
        publicPath: '../../'
      })
    }
    ...
}
```