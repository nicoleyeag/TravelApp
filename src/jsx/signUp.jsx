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
    <ReactBootstrap.Form>
      <ReactBootstrap.Row className="mb-3">
        <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridEmail">
          <ReactBootstrap.Form.Label>Email</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control type="email" placeholder="Enter email" />
        </ReactBootstrap.Form.Group>

        <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridPassword">
          <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control type="password" placeholder="Password" />
        </ReactBootstrap.Form.Group>
      </ReactBootstrap.Row>

      <ReactBootstrap.Form.Group className="mb-3" controlId="formGridUsername">
        <ReactBootstrap.Form.Label>Screen Name</ReactBootstrap.Form.Label>
        <ReactBootstrap.Form.Control type="screen_name" placeholder="username" />
      </ReactBootstrap.Form.Group>



      <coreButton className="coreButton" type="submit" onClick={handleSignUp}>
        Sign Up
      </coreButton>
    </ReactBootstrap.Form>
  );
};

export default SignUpForm;