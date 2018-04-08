#!/usr/bin/env node

const fs = require('fs-extra');
const exec = require('child_process').exec;

const repo = require('../config').repo;
const temp = '/tmp/apollo-theme-'+ Date.now();
const dest = process.cwd();
const options = {
    overwrite: false
};

module.exports = function() {

    console.log('    Fetching theme...');

    exec('git clone '+ repo +' '+ temp, onCloneComplete).stdout.pipe(process.stdout);
}

function onCloneComplete(error, stdout, stderr) {

    if (error) {
        console.log('    Error:', error);
    }
    else {
        fs.copySync(temp, dest, options);
        fs.remove(temp);

        console.log('    Theme files added.');
        console.log('    Installing dependencies...');

        exec('npm install', onInstallComplete).stdout.pipe(process.stdout);
    }
}

function onInstallComplete(error, stdout, stderr)  {

    if (error) {
        console.log('    Error:', error);
    }
    else {
        console.log('    Dependencies installed.');
    }
}
