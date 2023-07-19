const pkg = require('./package.json')
const path = require('path')
const glob = require('glob')
const yargs = require('yargs')
const colors = require('colors')
const through = require('through2');
const qunit = require('node-qunit-puppeteer')

const {rollup} = require('rollup')
