// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch('/api/user-profile').then(response => response.json()).then(data => setUserData(data)).catch(error => console.error('Error fetching user data:', error));
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "User Profile"), userData && /*#__PURE__*/React.createElement(UserProfileDetails, {
    user: userData
  }));
}
;

// const UserProfileDetails = ({ user }) => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Image src={user.photo} alt="User Photo" roundedCircle fluid />
//         </Col>
//         <Col>
//           <h1>{user.name}</h1>
//           <p>Email: {user.email}</p>
//           <p>Location: {user.location}</p>
//         </Col>
//       </Row>

//       <h2>Your Trips</h2>
//       <Row>
//         {user.trips.map((trip, index) => (
//           <Col key={index} md={4}>
//             <Card style={{ marginBottom: '15px' }}>
//               <Card.Img variant="top" src={trip.photo} />
//               <Card.Body>
//                 <Card.Title>{trip.title}</Card.Title>
//                 <Card.Text>{trip.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

export default UserProfile;