#!/usr/bin/node
const req = require ('request');
const url = '${process.argv[2]}18';

req.get(url, {decoding: 'utf-8'})
.on('data', function (data) {
    
};

