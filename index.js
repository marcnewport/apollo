#!/usr/bin/env node

const program = require('commander');

const init = require('./commands/init');

program
  .command('init')
  .description('Initialise a new project in current directory')
  .action(init);

program.parse(process.argv);
