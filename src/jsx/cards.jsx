// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';


function Card({ locationData }) {
  const { name, photo_list } = locationData;
  return (
    <ReactBootstrap.Card style={{ width: '18rem', height: '350px'  }}>
      <ReactBootstrap.Card.Img
        variant="top"
        src={photo_list[0].med_url}
        alt={`Photo for ${name}`}
        style={{ width: '18rem', height: '150px', objectFit: 'cover' }}
      />
      <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title>{name}</ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </ReactBootstrap.Card.Text>
        <coreButton className="coreButton" type="submit">Explore</coreButton>
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
}

export default Card;
