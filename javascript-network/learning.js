!/usr/bin/node
const request = require('request');
const fs = require('fs');



// Construct the API URL for the specified movie
const url = `https://swapi-api.alx-tools.com/api/films/`;

// Make a GET request to the API URL (server)to get movie data
//function takes 3 arguments

request.get(url, { encoding: 'utf-8' }, (error, response, body)
{
   //if response comes back, print it.
    console.log("Status Code:".response.statusCode);

    const body = JSON.parse (body);
    //to print the results which is an array of objects.
    /*console.log(body.results);*/

    //How to print each of the titles from here
//for loop- takes each object on the result and runs each function in 
})

});
/*body.results.forEach(function (film){
  console.log(film.title);*/  


  //how to save a response to a file/ tp our terminal
request.get(url).pipe(fs.createWriteStream('response.json'));


