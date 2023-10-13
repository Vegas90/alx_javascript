function validateEmail(){
    const email = document.getElementById('email').ariaValueMax;

    const emailpass= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailpass.text(email)){
        errorElement.innerText= "Please Enter a valid Email";
        return false;
    }
    else{
        errorElement.innerText= '';
        return true;
    }
}

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateEmail()) {
      alert('Email looks good. Form submitted!');
    
    }
});