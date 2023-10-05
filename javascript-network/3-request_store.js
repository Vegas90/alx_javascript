#!/usr/bin/node
const req = require ('request');
//It is a core module in Node.js that provides functionality for working with the file system, including reading from and writing to files, creating directories, and performing various file-related operations.
const fs = require ('fs');
const url = process.argv[2];
const file = process.argv[3];
 // Make a GET request to the URL
 request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (!err) {
          // No console output
        }
      });
    }
  });

  
  
  
  
  
  



