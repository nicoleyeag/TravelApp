// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';

function Card() {
  return (
    <ReactBootstrap.Card style={{ width: '18rem' }}>
      <ReactBootstrap.Card.Img variant="top" src="holder.js/100px180" />
      <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </ReactBootstrap.Card.Text>
        <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
}

export default Card;