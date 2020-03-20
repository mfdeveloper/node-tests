# node-tests2 [![Build Status](https://travis-ci.org/mfdeveloper/node-tests2.svg?branch=master)](https://travis-ci.org/mfdeveloper/node-tests2) 

> Node module for javascript tests and simple functions with es5/es6


## Install

```
$ npm install --save node-tests2
```


## Usage

```js
const nodeTests2 = require('node-tests2');

nodeTests2('unicorns');
//=> 'unicorns & rainbows'
```


## API

### nodeTests2(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global node-tests2
```

```
$ node-tests2 --help

  Usage
    node-tests2 [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ node-tests2
    unicorns & rainbows
    $ node-tests2 ponies
    ponies & rainbows
```


## License

MIT © [Felipe](http://github.com/mfdeveloper)
