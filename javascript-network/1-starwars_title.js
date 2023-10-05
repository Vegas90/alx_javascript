const request = require('request');
function getMovieTitle(id) {
  const url = `https://swapi-api.alx-tools.com/api/films/${id}`;
  request.get(url, { decoding: 'utf-8' }, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    const movie = JSON.parse(body);
    if (movie.episode_id === id) {
      console.log(movie.title);
    } else {
      console.log(`No Star Wars movie with episode ID ${id} found.`);
    }
  });
}