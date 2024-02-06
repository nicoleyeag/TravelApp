// import Buttons from '/static/jsx/coreButton.js';

import Buttons from '/static/jsx/coreButton.js'

function SignUpForm() {




// post request
  const handleSignUp = (e) => {
    e.preventDefault();

    const formInputs = {
      email: document.getElementById('formGridEmail').value,
      password: document.getElementById('formGridPassword').value,
      screen_name: document.getElementById('formGridUsername').value,
    
    };
    fetch('/sign-up/user', {  
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    .then(response => response.json())
  .then(data => {
    
    if (data.code !== 'SUCCESS') {
      // Display an alert with the error message
      alert(data.message);

    }else {
      // User signed in successfully
      window.location.href = '/homepage';

    }
  })
  
    .catch(error => console.error('Error fetching user data:', error));
  }


  return (
    <ReactBootstrap.Form className="sign-up-form">

      <ReactBootstrap.Form.Label id="LoginTop">
        Welcome! 🙌
          
        </ReactBootstrap.Form.Label>

      <ReactBootstrap.Row className="email">
        <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridEmail">
          <ReactBootstrap.Form.Label id="inputLogin" >Email</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control className="placeholderForm" type="email" placeholder="Enter email" />
        </ReactBootstrap.Form.Group>
        </ReactBootstrap.Row>

        <ReactBootstrap.Row className="password">
        <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridPassword">
          <ReactBootstrap.Form.Label id="inputLogin">Password</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control className="placeholderForm" type="password" placeholder="Password" />
        </ReactBootstrap.Form.Group>
      </ReactBootstrap.Row>

      <ReactBootstrap.Row className="username">
        <ReactBootstrap.Form.Group className="screenName" controlId="formGridUsername">
          <ReactBootstrap.Form.Label id="inputLogin">Username</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control className="placeholderForm" type="screen_name" placeholder="username" />
        </ReactBootstrap.Form.Group>
      </ReactBootstrap.Row>


      <coreButton id="signUpButton" className="coreButton" type="submit" onClick={handleSignUp}>
        Sign Up
      </coreButton>
    </ReactBootstrap.Form>
  );
};

export default SignUpForm;