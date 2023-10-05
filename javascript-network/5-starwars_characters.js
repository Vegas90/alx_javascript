#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, { encoding: 'utf-8' }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    if (characters.length === 0) {
      console.log('No characters found for this movie.');
    } else {
      characters.forEach((characterUrl) => {
        request.get(characterUrl, { encoding: 'utf-8' }, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          } else {
            console.error(`Error fetching character data: ${charError || 'Request failed with status code ' + charResponse.statusCode}`);
          }
        });
      });
    }
  } else {
    console.error(`Error fetching movie data: ${error || 'Request failed with status code ' + response.statusCode}`);
  }
});
