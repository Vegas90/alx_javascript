function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear existing fields

    //loop to generate input fields with unique name attributes.
    for (let i = 1; i <= numFields; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.name = "field" + i;
      input.placeholder = "Field " + i;
      inputContainer.appendChild(input);
    }
  }

  // Function to validate the form before submission.
  function validateForm(event) {
    const numFields = document.getElementById("numFields").value;
    for (let i = 1; i <= numFields; i++) {
      const input = document.getElementsByName("field" + i)[0];
      if (!input.value) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
        return;
      }
    }
  }

  const numFieldsSelect = document.getElementById("numFields");
  const dynamicForm = document.getElementById("dynamicForm");

  // Initialize the form with the default number of fields.
  generateInputFields(numFieldsSelect.value);

  // Add an event listener to the dropdown to generate fields on selection change.
  numFieldsSelect.addEventListener("change", function () {
    generateInputFields(numFieldsSelect.value);
  });

  // Add an event listener to the form to validate before submission.
  dynamicForm.addEventListener("submit", validateForm);