// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Image, Card } from 'react-bootstrap';


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data
    fetch('/api/user-profile')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <Container>
      <h1>User Profile</h1>
      {userData && <UserProfileDetails user={userData} />}
    </Container>
  );
};

const UserProfileDetails = ({ user }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={user.photo} alt="User Photo" roundedCircle fluid />
        </Col>
        <Col>
          <h1>{user.screen_name}</h1>
          <p>Email: {user.email}</p>
          {/* Add other user details as needed */}
          <p>Location: {user.location}</p>
        </Col>
      </Row>

      <h2>Your Trips</h2>
      <Row>
        {user.trips.map((trip, index) => (
          <Col key={index} md={4}>
            <Card style={{ marginBottom: '15px' }}>
              {/* Display trip details here */}
              <Card.Title>{trip.title}</Card.Title>
              <Card.Text>{trip.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserProfile;

