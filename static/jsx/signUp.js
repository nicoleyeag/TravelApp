// import Buttons from '/static/jsx/coreButton.js';

import Buttons from '/static/jsx/coreButton.js';
function SignUpForm() {
  // post request
  const handleSignUp = e => {
    e.preventDefault();
    const formInputs = {
      email: document.getElementById('formGridEmail').value,
      password: document.getElementById('formGridPassword').value,
      screen_name: document.getElementById('formGridUsername').value
    };
    fetch('/sign-up/user', {
      method: 'POST',
      body: JSON.stringify(formInputs),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => {
      if (data.code !== 'SUCCESS') {
        // Display an alert with the error message
        alert(data.message);
      } else {
        // User signed in successfully
        window.location.href = '/homepage';
      }
    }).catch(error => console.error('Error fetching user data:', error));
  };
  return /*#__PURE__*/React.createElement(ReactBootstrap.Form, {
    className: "sign-up-form"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, {
    id: "LoginTop"
  }, "Welcome! \uD83D\uDE4C"), /*#__PURE__*/React.createElement(ReactBootstrap.Row, {
    className: "email"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    as: ReactBootstrap.Col,
    controlId: "formGridEmail"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, {
    id: "inputLogin"
  }, "Email"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    className: "placeholderForm",
    type: "email",
    placeholder: "Enter email"
  }))), /*#__PURE__*/React.createElement(ReactBootstrap.Row, {
    className: "password"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    as: ReactBootstrap.Col,
    controlId: "formGridPassword"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, {
    id: "inputLogin"
  }, "Password"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    className: "placeholderForm",
    type: "password",
    placeholder: "Password"
  }))), /*#__PURE__*/React.createElement(ReactBootstrap.Row, {
    className: "username"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    className: "screenName",
    controlId: "formGridUsername"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, {
    id: "inputLogin"
  }, "Username"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    className: "placeholderForm",
    type: "screen_name",
    placeholder: "username"
  }))), /*#__PURE__*/React.createElement("coreButton", {
    id: "signUpButton",
    className: "coreButton",
    type: "submit",
    onClick: handleSignUp
  }, "Sign Up"));
}
;
export default SignUpForm;