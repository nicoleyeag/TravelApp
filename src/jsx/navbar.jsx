// import React from 'https://cdn.skypack.dev/react';

// import { Container } from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Nav from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';
// import Navbar from 'https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js';

import Buttons from '/static/jsx/coreButton.js';

function Topnav() {
  return (
    <ReactBootstrap.Navbar expand="lg" className="bg-body-tertiary">
    <ReactBootstrap.Container fluid>
      <ReactBootstrap.Navbar.Brand href="#">Navbar scroll</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
      <ReactBootstrap.Navbar.Collapse id="navbarScroll">
        <ReactBootstrap.Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <ReactBootstrap.Nav.Link className="button-link" href="#action1">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link className="button-link" href="#action2">Link</ReactBootstrap.Nav.Link>

          
        </ReactBootstrap.Nav>

          <coreButton className="coreButton" id="login" type="submit">Search</coreButton>
        
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Container>
  </ReactBootstrap.Navbar>

  );
}

export default Topnav;