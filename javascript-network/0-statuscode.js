#!/usr/bin/node
const req = require('request');
const url = process.argv[2];

req.get(url, (response) => {
console.log('code: ${response.statusCode}');
});

