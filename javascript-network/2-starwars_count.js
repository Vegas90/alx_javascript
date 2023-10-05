#!/usr/bin/node
const request = require('request');
// Get the movie ID from the command line arguments
const movieId = process.argv[2];
// Make a GET request to the Star Wars API
request.get(`https://swapi-api.alx-tools.com/api/films/${movieId}`, (error, response, body) => {
  if (error) {
    // If there is an error, log it and return
    console.error(`Error: ${error.message}`);
    return;
  }
  // Parse the response body as JSON
  const movie = JSON.parse(body);
  // Print the movie title
  console.log(movie.title);
});