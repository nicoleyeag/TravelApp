// import Buttons from '/static/jsx/coreButton.js';

import Buttons from '/static/jsx/coreButton.js'

function SignInForm() {




// post request
  const handleSignIn = (e) => {
    e.preventDefault();

    const formInputs = {
      email: document.getElementById('formGridEmail').value,
      password: document.getElementById('formGridPassword').value,
    //   screen_name: document.getElementById('formGridUsername').value,
    
    };

    fetch('/sign-in/user', {
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json',
      },
    })

      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        if (data.code !== 'SUCCESS') {
          // Display an alert with the error message
          alert(data.message || 'Unexpected error');
          console.error('Error data:', data);

        }else {
          // User signed in successfully
          window.location.href = '/';
        }
      })
  
    .catch(error => console.error('Error fetching user data:', error));
  }


  return (
    <ReactBootstrap.Form className="sign-in-form">
      <ReactBootstrap.Row className="headerForm">
        <ReactBootstrap.Form.Label id="LoginTop">
        Hello There! 👋
          
        </ReactBootstrap.Form.Label>

      </ReactBootstrap.Row>

      <ReactBootstrap.Row className="email">
        <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridEmail">
          <ReactBootstrap.Form.Label id="inputLogin">Email</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control className="placeholderForm" type="email" placeholder="Enter email" />
        </ReactBootstrap.Form.Group>
        </ReactBootstrap.Row>

        <ReactBootstrap.Row className="password">
        <ReactBootstrap.Form.Group as={ReactBootstrap.Col} controlId="formGridPassword">
          <ReactBootstrap.Form.Label id="inputLogin">Password</ReactBootstrap.Form.Label>
          <ReactBootstrap.Form.Control className="placeholderForm" type="password" placeholder="Password" />
        </ReactBootstrap.Form.Group>
      </ReactBootstrap.Row>

      <coreButton id="signInButton" className="coreButton" type="submit" onClick={handleSignIn}>
        Sign In
      </coreButton>
    </ReactBootstrap.Form>
  );
};

export default SignInForm;