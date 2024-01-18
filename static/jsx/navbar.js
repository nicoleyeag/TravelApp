// import React from 'https://cdn.skypack.dev/react';

// import { Container } from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Nav from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Navbar from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';

import Buttons from '/static/jsx/coreButton.js';
function Topnav() {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Navbar, {
    expand: "lg",
    className: "bg-body-tertiary"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Navbar.Brand, {
    href: "#"
  }, "Navbar scroll"), /*#__PURE__*/React.createElement(ReactBootstrap.Navbar.Toggle, {
    "aria-controls": "navbarScroll"
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Navbar.Collapse, {
    id: "navbarScroll"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Nav, {
    className: "me-auto my-2 my-lg-0",
    style: {
      maxHeight: '100px'
    },
    navbarScroll: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Nav.Link, {
    className: "button-link",
    href: "#action1"
  }, "Home"), /*#__PURE__*/React.createElement(ReactBootstrap.Nav.Link, {
    className: "button-link",
    href: "#action2"
  }, "Link")), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    id: "login",
    type: "submit"
  }, "Search"))));
}
export default Topnav;