function createClassRoom(numberOfStudents) {
    // Define a function called studentSeat that takes a seat number and returns a function
    function studentSeat(seat) {
      // The returned function simply returns the seat number
      return function () {
        return seat;
      };
    }
  
    // Create an empty array to store the student seat functions
    var students = [];
  
    // Use a loop to create and add seat functions to the students array
    for (let i = 0; i < numberOfStudents; i++) {
      // Call studentSeat with the seat number (i + 1) and push the returned function to students
      students.push(studentSeat(i + 1));
    }
  
    // Return the array containing the seat functions
    return students;
  }
  
  // Call createClassRoom with 10 students and store the result in classRoom
  var classRoom = createClassRoom(10);
  
  