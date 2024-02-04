// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';
import CombinedComponent  from '/static/jsx/addTOtrip.js';




function Card({ locationData }) {
  const { name, photo_list, description } = locationData;



  const handleSelectTrip = (selectedTripId) => {
    console.log("Selected Trip ID:", selectedTripId);
    // Handle the selected trip logic if needed
  };



  return (
    <ReactBootstrap.Card style={{ width: '18rem', height: '350px' }}>
      <ReactBootstrap.Card.Img
        variant="top"
        src={photo_list[0].med_url}
        alt={`Photo for ${name}`}
        style={{ width: '18rem', height: '150px', objectFit: 'cover' }}
      />
      <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title>{name}</ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text>{description}</ReactBootstrap.Card.Text>

        <coreButton className="coreButton" type="submit">
          Read More
        </coreButton>

        {/* Integrated modal and form */}
        <CombinedComponent
        // passing the locationData
          locationData={locationData}
          onSelectTrip={handleSelectTrip}
        />

      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
}

export default Card;