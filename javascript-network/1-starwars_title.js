#!/usr/bin/node
const req = require ('request');
const id = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
const parts = [];

req.get(url, {decoding: 'utf-8'})
.on('data', function (data) {
    const response = JSON.parse(data);
    console.log(response.title);
}
);