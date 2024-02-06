// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';
import AddToTripForm  from '/static/jsx/addTOtrip.js';




function Card({ locationData }) {
  const { name, photo_list, description } = locationData;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleSelectTrip = (selectedTripId) => {
    console.log("Selected Trip ID:", selectedTripId);
    // Handle the selected trip logic if needed
  };

  const handleToggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleShowModal = () => {
    setShowModal(true);
    handleToggleExpansion(); // You can adjust this based on your specific logic
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const buttonText = isExpanded ? 'Read Less' : 'Read More';
  const cardHeight = isExpanded ? 'auto' : '450px';
  const truncatedDescription = description ? (
    <div style={{ overflow: 'hidden', maxHeight: isExpanded ? 'none' : '140px' }}>
      {description}
    </div>
  ) : '';

  return (
    <ReactBootstrap.Card className="location-card" style={{ width: '22rem', height: cardHeight }}>
      {photo_list && photo_list.length > 0 && (
        <ReactBootstrap.Card.Img
          variant="top"
          src={photo_list[0].large_url}
          alt={`Photo for ${name}`}
          style={{ width: '22rem', height: '183.33px', objectFit: 'cover', margin: '0'}}
        />
      )}
      <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title>{name}</ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text>{isExpanded ? description : truncatedDescription}
      </ReactBootstrap.Card.Text>

        <coreButton id="excursionButton" className="coreButton" type="button" onClick={handleToggleExpansion}>
          {buttonText}
        </coreButton>
        <coreButton id="addtotrip" className="coreButton" variant="primary" onClick={handleShowModal}>
          +
        </coreButton>

        {/* Integrated modal and form */}
        <AddToTripForm
          show={showModal}
          onHide={handleCloseModal}
          locationData={locationData}
          onSelectTrip={handleSelectTrip}
        />
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
};

export default Card;