#!/usr/bin/env node

'use strict';

var args = process.argv.splice(2);
var execSync = require('execSync');

var result;
args.forEach(function(val) {
  console.log('- Running `make ' + val + '`:');
  result = execSync.run('make ' + val);
});

console.log('\nDone sharting.');
