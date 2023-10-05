#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, { encoding: 'utf-8' }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const responseData = JSON.parse(body);
    const filmsWithWedge = responseData.results.filter((film) =>
    //Filters the films where "Wedge Antilles" (character ID 18) is present by checking if the character's URL is in the characters array of each film.
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );
//Prints the number of movies with Wedge Antilles.
    console.log(filmsWithWedge.length);
  }
});