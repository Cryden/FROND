#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var program = require('commander');
 
program
  .version(require('./package.json').version, '-v, --version')
  .option('-u, --update', 'update FROND')
  .parse(process.argv);


if (!program.args.length) program.help();

console.log('FROND by CRYDEsigN. 2018');
