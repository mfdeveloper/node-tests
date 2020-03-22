# node-tests [![Build Status](https://travis-ci.org/mfdeveloper/node-tests.svg?branch=master)](https://travis-ci.org/mfdeveloper/node-tests) 

> Node module for javascript tests and simple functions with es5/es6, based in [generator-nmx](https://github.com/radiovisual/generator-nmx).

> Use this repository like a *_template_* to create others Node modules projects


## Install

```
$ npm install --save node-tests
```


## Usage

```js
const nodeTests = require('node-tests');

nodeTests('unicorns');
//=> 'unicorns & rainbows'
```


## API

### nodeTests(input, [options])

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
$ npm install --global node-tests
```

```
$ node-tests --help

  Usage
    node-tests [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ node-tests
    unicorns & rainbows
    $ node-tests ponies
    ponies & rainbows
```


## License

MIT © [Felipe](http://github.com/mfdeveloper)
