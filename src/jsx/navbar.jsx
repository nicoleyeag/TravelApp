// import React from 'https://cdn.skypack.dev/react';

// import { Container } from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Nav from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Navbar from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';

import Buttons from '/static/jsx/coreButton.js';



function Topnav() {

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
    window.location.href = '/homepage';
  };

  return (
    <ReactBootstrap.Navbar expand="lg" className="navbar">
    <ReactBootstrap.Container fluid>
      <ReactBootstrap.Navbar.Brand href="#">
        <img
              src="/static/img/logotwo.jpg"
              width="280"
              height="115"
              className="d-inline-block align-top"
              alt="OMW"
            />
      </ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll"/>
      <ReactBootstrap.Navbar.Collapse id="navbarScroll">
        <ReactBootstrap.Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <ReactBootstrap.Nav.Link className="button-link" onClick={handleExcursionClick}>Excursions</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link className="button-link">Map</ReactBootstrap.Nav.Link>

          
        </ReactBootstrap.Nav>
        
          <ReactBootstrap.Nav.Link className="button-link" style={{ marginRight: '20px' }} onClick={handleSignInClick}>Sign In</ReactBootstrap.Nav.Link>
          <coreButton className="coreButton" id="login" type="submit" onClick={handleSignUpClick} style={{ marginLeft: '20px' }}>Sign Up</coreButton>

      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Container>
  </ReactBootstrap.Navbar>

  );
}

export default Topnav;