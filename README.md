
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

1.  callbacks('unique') 同一个回调只能添加一次

```javascript
var callbacks = callbacksJs('unique');
var fn1 = function(){console.log(1)}
callbacks.add(fn1);
callbacks.add(fn1);
callbacks.fire();// 只输出1 没有输出2个1 第二次添加的回调函数没有添加成功
```

2.  callbacks('once') 回调函数列表只执行一次，后续再调用fire()，回调不执行

```javascript
var callbacks = callbacksJs('once');
var fn1 = function(){console.log(1)}
callbacks.add(fn1);
callbacks.add(fn1);
callbacks.fire();// --> 1 1
callbacks.fire()// -- 没有输出
```

3.  empty( ) 清空回调函数列表 

```javascript
var callbacks = callbacksJs('unique');
var fn1 = function(){console.log(1)}
callbacks.add(fn1);
callbacks.fire();// --> 1
callbacks.empty();
callbacks.fire();// -- 没有输出
```

4.  remove(key) 删除指定的回调函数

```javascript
var callbacks = callbacksJs();
var fn1 = function(){console.log(1)}
callbacks.add(fn1);
callbacks.add(fn1);
callbacks.fire();// --> 1 1
callbacks.remove(fn1)
callbacks.fire()// -- 没有输出
```

5.  add( ) 添加回调函数

```javascript
var fn1 = function(){console.log(0)}
callbacks.add(fn1);
```

6.  fire( ) 执行回调函数列表
```javascript
var fn1 = function(){console.log(0)}
callbacks.add(fn1);
callbacks.fire() // --> 0
```

