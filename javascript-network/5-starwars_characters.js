#!/usr/bin/node
const request = require('request');

// Get the Movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the API URL for the specified movie
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API URL to get movie data
request.get(apiUrl, { encoding: 'utf-8' }, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    // Parse the JSON response to get movie data
    const movieData = JSON.parse(body);
    
    // Get the list of characters for the movie
    const characters = movieData.characters;

    if (characters.length === 0) {
      console.log('No characters found for this movie.');
    } else {
      // Iterate through each character URL
      characters.forEach((characterUrl) => {
        // Make a GET request to fetch character data
        request.get(characterUrl, { encoding: 'utf-8' }, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            // Parse the JSON response to get character data
            const characterData = JSON.parse(charBody);
            
            // Print the character's name
            console.log(characterData.name);
          } else {
            // Handle errors if character data request fails
            console.error(`Error fetching character data: ${charError || 'Request failed with status code ' + charResponse.statusCode}`);
          }
        });
      });
    }
  } else {
    // Handle errors if movie data request fails
    console.error(`Error fetching movie data: ${error || 'Request failed with status code ' + response.statusCode}`);
  }
});
