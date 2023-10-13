function validatePassword() {
    const pass = document.getElementById("password").value;
    const error = document.getElementById('error'); 
  
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    if (!lengthRegex.test(password)) {
      error.innerText = 'Password must be at least 8 characters long.';
      return false;
    }
  
    if (!uppercaseRegex.test(password)) {
      error.innerText = 'Password must contain at least one uppercase letter.';
      return false;
    }
  
    if (!lowercaseRegex.test(password)) {
      error.innerText = 'Password must contain at least one lowercase letter.';
      return false;
    }
  
    if (!digitRegex.test(password)) {
      error.innerText = 'Password must contain at least one numeric digit.';
      return false;
    }
  
    if (!specialCharRegex.test(password)) {
      error.innerText = 'Password must contain at least one special character (!@#$%^&*).';
      return false;
    }
  
    error.innerText = '';
    return true;
  }
  
  document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validatePassword()) {
      alert('Password meets the criteria. Form submitted!');
    }
  });
