'use strict';
// since this is a form i need an event listener on the whole thing

// add button event listener from login!!!

const button = document.querySelector('#login')

button.addEventListener('click', (evt) => {
    window.location.href = '/login';
})

// need to add a use effect to wait for the page to render before calling the button



// SIGN UP FORM POST METHOD
// '/login'
const form = document.querySelector('#signInForm');

console.log('top of function')

form.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    console.log('event listener')

    const formInputs = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
    };
    console.log(formInputs.email)

    fetch('/login', {
        method: 'POST',
        body: new URLSearchParams(formInputs),
        headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    })

    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        // if (responseJson.error) {
        //     // Display a popup or alert for incorrect password
        //     alert("Incorrect password. Please try again.");
        // } else {
        //     // Handle successful login (if needed)
        //     console.log("Login successful");

        //     // Display an alert for successful login (optional)
        //     alert("Login successful. Redirecting to homepage.");

        //     // Redirect to another page (for example, the homepage)
        //     window.location.href = '/homepage.html';
        // }
        // alert(responseJson.status);
    });

});
    
// am i sending and receiving the correct data TYPE? trying to return a form and maybe returning json?