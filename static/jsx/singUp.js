// import Buttons from '/static/jsx/coreButton.js';

import Buttons from '/static/jsx/coreButton.js';
function SignUpForm() {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Form, null, /*#__PURE__*/React.createElement(ReactBootstrap.Row, {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    as: Col,
    controlId: "formGridEmail"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Email"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "email",
    placeholder: "Enter email"
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    as: Col,
    controlId: "formGridPassword"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Password"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "password",
    placeholder: "Password"
  }))), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "formGridAddress1"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Screen Name"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "password",
    placeholder: "username"
  })), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    type: "submit"
  }, "Sign Up"));
}
export default SignUpForm;