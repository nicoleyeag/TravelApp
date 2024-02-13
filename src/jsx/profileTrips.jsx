

  function ProfileTripCard({ trip }) {

    const handleTripPage = () => {
      // Use window.location.href to navigate to the desired URL
      window.location.href = `/trip-page?trip_id=${trip.trip_id}`;
    };
  
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
    
      return (
        <ReactBootstrap.Card className="profileCard" style={{ width: '22rem'}}>
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title className="cardTitle">{trip.title}</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text className="cardDescription">{trip.description}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Text className="cardDate">Start Date: {formatDate(trip.start_date)}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Text className="cardDate">End Date: {formatDate(trip.end_date)}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Text className="cardBudget">Budget: ${trip.budget}</ReactBootstrap.Card.Text>
            {/* Add a styled button */}
            <coreButton className="coreButton" onClick={handleTripPage}>
              See Trip Details
            </coreButton>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      );
    };
  export default ProfileTripCard;