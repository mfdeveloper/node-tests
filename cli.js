#!/usr/bin/env node
'use strict';
var meow = require('meow');
var nodeTests = require('.');

var cli = meow([
	'Usage',
	'  $ node-tests [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ node-tests',
	'  unicorns & rainbows',
	'  $ node-tests ponies',
	'  ponies & rainbows'
]);

console.log(nodeTests(cli.input[0] || 'unicorns'));
