console.log("Start of the execution queue");
// Using setTimeout with delay 0 to schedule the final code block
setTimeout(function () {
    console.log("Final code block to be executed using setTimeout (with delay of 0)");
  
    // Using a loop to log iteration numbers
    for (let i = 1; i <= 100; i++) {
      console.log(`Iteration number: ${i}`);
    }
  
    console.log("End of the loop");
  }, 0);