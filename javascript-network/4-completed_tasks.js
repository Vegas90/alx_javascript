const req = require('request');
const url = process.argv[2];
const completedTasks = {};

// Make a GET request to the specified URL
req.get(url, { encoding: 'utf-8' }, (error, response, body) => {
    // Parse the JSON response data into an array of 'todos'
    const todos = JSON.parse(body);

    // Iterate through each 'todo' in the array
    todos.forEach((todo) => {
      // Check if the 'completed' field of the 'todo' is true
      if (todo.completed === true) {
        // If there is no entry for the 'userId' in 'completedTasks', initialize it to 1
        if (!completedTasks[todo.userId]) {
          completedTasks[todo.userId] = 1;
        } else {
          // If there is an entry for the 'userId', increment the count by 1
          completedTasks[todo.userId]++;
        }
      }
    });

    // Print the 'completedTasks' object, which contains the count of completed tasks for each user
    console.log(completedTasks);
});
