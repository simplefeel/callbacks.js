
# callbacks.js [![Build Status](https://travis-ci.org/ApoorvSaxena/lozad.js.svg?branch=master)](https://travis-ci.org/simplefeel/callbacks.js.svg?branch=master)
原生js观察者模式的的实现，主要用来管理回调函数队列，参考jquery的callbacks模块

## Install

```sh
$ npm install --save callbacks

Then with a module bundler like rollup or webpack, use as you would anything else:

```javascript
// using ES6 modules
import callbacks from 'callbacks'

// using CommonJS modules
var callbacksJs = require('callbacks');
var callbacks = callbacksJs('unique');
var fn1 = function(){console.log(0)}
callbacks.add(fn1);
callbacks.fire();//--> 0
```
or

```html
<script type="text/javascript" src="callbacks.js"></script>
<script>
    var callbacks = callbacks();
</script>
```

## API

1. add()

