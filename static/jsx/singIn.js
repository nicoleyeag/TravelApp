// import Buttons from '/static/jsx/coreButton.js';

import Buttons from '/static/jsx/coreButton.js';
function SignInForm() {
  // post request
  const handleSignIn = e => {
    e.preventDefault();
    const formInputs = {
      email: document.getElementById('formGridEmail').value,
      password: document.getElementById('formGridPassword').value
      //   screen_name: document.getElementById('formGridUsername').value,
    };
    fetch('/sign-in/user', {
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => {
      if (data.success) {
        // User signed up successfully
        // window.location.href = '/new-homepage';
      } else {
        // Display an alert with the error message
        alert(data.message);
      }
    }).catch(error => console.error('Error fetching user data:', error));
  };
  return /*#__PURE__*/React.createElement(ReactBootstrap.Form, null, /*#__PURE__*/React.createElement(ReactBootstrap.Row, {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    as: ReactBootstrap.Col,
    controlId: "formGridEmail"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Email"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "email",
    placeholder: "Enter email"
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    as: ReactBootstrap.Col,
    controlId: "formGridPassword"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Password"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "password",
    placeholder: "Password"
  }))), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    type: "submit",
    onClick: handleSignIn
  }, "Sign In"));
}
;
export default SignInForm;