# Koa Custom Statuses

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![David deps][david-image]][david-url]
[![iojs version][iojs-image]][iojs-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/koa-qs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-qs
[travis-image]: https://img.shields.io/travis/koajs/qs.svg?style=flat-square
[travis-url]: https://travis-ci.org/koajs/qs
[coveralls-image]: https://img.shields.io/coveralls/koajs/qs.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/koajs/qs?branch=master
[david-image]: https://img.shields.io/david/koajs/qs.svg?style=flat-square
[david-url]: https://david-dm.org/koajs/qs
[iojs-image]: https://img.shields.io/badge/io.js-%3E=_1.0-yellow.svg?style=flat-square
[iojs-url]: http://iojs.org/
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/koa-qs.svg?style=flat-square
[download-url]: https://npmjs.org/package/koa-qs

Koa has a defined set of HTTP response codes that can be retured in a request.
While they are shandard HTTP codes and will be enough most of the time,
Sometimes, there is a need for creating custom codes.
This module enables you to achieve just that declaring the additional codes you require in the very beginning.
It also enables you to change the status message of existing status codes.

The module definition is extremely simple. Just wrap a koa function into the module along with an object containing the status code you require.

```js

var koa = require('koa')
var app = koa()
require('koa-custom-statuses')(app, {
    '200': 'Im Loving it!!',
    '499': 'Cos I can come that close to 500',
    '700': 'Theres the 7 series in HTTP',
    '999': 'Because We can'
});

app.use(funcion(){
    //This will no longer throw an invalid code error
    this.status = 700;
})

```

There are just some basics you need to keep in mind.

- The status codes can be 3 digit numbers only.
- The codes you declare will overwrite the Koa Defaults.
- You can only use default Koa codes or the codes defined in the module. Any others will throw an error

## License

[MIT](LICENSE)
