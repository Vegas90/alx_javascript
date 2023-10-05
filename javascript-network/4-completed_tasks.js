const req = require('request');
const url = process.argv[2];
const completedTasks = {};

req.get(url, { encoding: 'utf-8' }, (error, response, body) => {
    const todos = JSON.parse(body);

    todos.forEach((todo) => {
      if (todo.completed === true) {
        if (!completedTasks[todo.userId]) {
          completedTasks[todo.userId] = 1;
        } else {
          completedTasks[todo.userId]++;
        }
      }
    });

    console.log(completedTasks);

})
