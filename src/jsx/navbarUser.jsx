import Buttons from '/static/jsx/coreButton.js';

function Usernav() {

  const handleProfile = () => {
    // Use window.location.href to navigate to the desired URL
    window.location.href = '/profile';
  };

  const handleSignOutClick = async () => {
    try {
      // Make a request to your server to sign out and invalidate the session
      const response = await fetch('/sign-out', {
        method: 'POST', // You can use 'GET' or 'POST' based on your server implementation
        credentials: 'include', // Include credentials (cookies) for cross-origin requests
      });

      if (response.ok) {
        // Redirect to the sign-in page or handle the success scenario
        window.location.href = '/sign-in';
      } else {
        // Handle errors or show a message to the user
        console.error('Sign-out error:', response.statusText);
      }
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  const handleExcursionClick = () => {
    window.location.href = '/excursions';
  };

  const handleLogoClick = () => {
    window.location.href = '/homepage';
  };


  // if user logged in render UserNav
  
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
        
          <ReactBootstrap.Nav.Link className="button-link" style={{ marginRight: '20px' }} onClick={handleSignOutClick}>Log Out</ReactBootstrap.Nav.Link>
          <coreButton className="coreButton" type="submit" onClick={handleProfile} style={{ marginLeft: '20px' }}>My Profile</coreButton>

      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Container>
  </ReactBootstrap.Navbar>

  );
}

export default Usernav;