#!/usr/bin/node
const req = require('request');
const url = process.argv[2];
req.get('url', {decoding: 'utf-8'})
console.error('code: ${response.statusCode}')
