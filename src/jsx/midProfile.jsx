import CreateTripForm from '/static/jsx/createTrip.js';

function Mid({}) {
  const [showCreateTripModal, setShowCreateTripModal] = React.useState(false);
  console.log('CreateTripForm rendered');

  const handleCreateTripModalShow = () => {
    setShowCreateTripModal(true);
    console.log('Create Trip modal shown');
  };

  const handleCreateTripModalHide = () => {
    setShowCreateTripModal(false);
  };

  return (
    <div className="mid">
      <div className="MyTripsText">My Trips</div>
      <div className="CreateTripButton">
        {/* Button to trigger the modal */}
        <coreButton id="createTripButton" className="coreButton" variant="primary" type="submit" onClick={handleCreateTripModalShow}>
          +
        </coreButton>
        {/* Render the CreateTripForm component */}
        {showCreateTripModal && <CreateTripForm show={showCreateTripModal} onHide={handleCreateTripModalHide} />}
      </div>
    </div>
  );
}

export default Mid;
