#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nodeTests2 = require('./');

var cli = meow([
	'Usage',
	'  $ node-tests2 [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ node-tests2',
	'  unicorns & rainbows',
	'  $ node-tests2 ponies',
	'  ponies & rainbows'
]);

console.log(nodeTests2(cli.input[0] || 'unicorns'));
