#!/usr/bin/node
const request = require('request');
// Get the API URL from the command line arguments
const apiUrl = process.argv[2];
// Make a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // If there is an error, log it and return
    console.error(`Error: ${error.message}`);
    return;
  }
  // Parse the response body as JSON
  const movies = JSON.parse(body);
  // Count the number of movies where Wedge Antilles is present
  const wedgeAntillesMovies = movies.filter(movie => movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));
  // Print the number of movies
  console.log(wedgeAntillesMovies.length);
});