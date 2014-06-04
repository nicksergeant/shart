#!/usr/bin/env node

'use strict';

var args = process.argv.splice(2);
var execSync = require('execSync');

if (args.length) {
  args.forEach(function(val) {
    console.log('- Running `make ' + val + '`:');
    execSync.run('make ' + val);
  });
} else {
  execSync.run('make');
}

console.log('\n💩');
