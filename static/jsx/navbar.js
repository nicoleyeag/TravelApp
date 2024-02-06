// import React from 'https://cdn.skypack.dev/react';

// import { Container } from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Nav from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Navbar from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';

import Buttons from '/static/jsx/coreButton.js';
import isLoggedIn from '/static/jsx/auth.js';
function Topnav() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    fetch('/check_login').then(response => {
      setLoggedIn(response.ok);
    }), [];
  });
  const handleSignUpClick = () => {
    // Use window.location.href to navigate to the desired URL
    window.location.href = '/sign-up';
  };
  const handleSignInClick = () => {
    // Use window.location.href to navigate to the desired URL
    window.location.href = '/sign-in';
  };
  const handleExcursionClick = () => {
    window.location.href = '/excursions';
  };
  const handleLogoClick = () => {
    window.location.href = '/';
  };
  const handleProfile = () => {
    // Use window.location.href to navigate to the desired URL
    window.location.href = '/profile';
  };
  const handleSignOutClick = async () => {
    try {
      // Make a request to your server to sign out and invalidate the session
      const response = await fetch('/sign-out', {
        method: 'POST',
        // You can use 'GET' or 'POST' based on your server implementation
        credentials: 'include' // Include credentials (cookies) for cross-origin requests
      });
      if (response.ok) {
        // Redirect to the sign-in page or handle the success scenario
        window.location.href = '/';
      } else {
        // Handle errors or show a message to the user
        console.error('Sign-out error:', response.statusText);
      }
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  // if user logged in render UserNav

  return /*#__PURE__*/React.createElement(ReactBootstrap.Navbar, {
    expand: "lg",
    className: "navbar"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Navbar.Brand, {
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "/static/img/logotwo.jpg",
    width: "280",
    height: "115",
    className: "d-inline-block align-top",
    alt: "OMW",
    onClick: handleLogoClick
  })), /*#__PURE__*/React.createElement(ReactBootstrap.Navbar.Toggle, {
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
    onClick: handleExcursionClick
  }, "Excursions"), /*#__PURE__*/React.createElement(ReactBootstrap.Nav.Link, {
    className: "button-link"
  }, "Map")), !loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactBootstrap.Nav.Link, {
    className: "button-link",
    style: {
      marginRight: '20px'
    },
    onClick: handleSignInClick
  }, "Sign In"), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    id: "login",
    type: "submit",
    onClick: handleSignUpClick,
    style: {
      marginLeft: '20px'
    }
  }, "Sign Up")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactBootstrap.Nav.Link, {
    className: "button-link",
    style: {
      marginRight: '20px'
    },
    onClick: handleSignOutClick
  }, "Log Out"), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    type: "submit",
    onClick: handleProfile,
    style: {
      marginLeft: '20px'
    }
  }, "My Profile")))));
}
export default Topnav;