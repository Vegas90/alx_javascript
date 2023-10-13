// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
  
    // Check if the "name" and "email" fields are filled
    if (!nameValue || !emailValue) {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      // You can also add code here to send the form data to the server
    }
  }
  
  // Add an event listener to the form element to listen for the "submit" event
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", handleFormSubmit);