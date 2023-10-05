#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, { encoding: 'utf-8' }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const responseData = JSON.parse(body);
    const filmsWithWedge = responseData.results.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log(`Number of movies with Wedge Antilles: ${filmsWithWedge.length}`);
  }
});