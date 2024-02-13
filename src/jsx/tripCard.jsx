// TripCard.js



function TripCard({ trip, onEditClick }) {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
    <ReactBootstrap.Card className="tripCard">
      <ReactBootstrap.Card.Body>
      <ReactBootstrap.Card.Title className="cardTitle">{trip.title}</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text id="wrapDesc" className="cardDescription">{trip.description}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Text className="cardDate">Start Date: {formatDate(trip.start_date)}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Text className="cardDate">End Date: {formatDate(trip.end_date)}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Text className="cardBudget">Budget: ${trip.budget}</ReactBootstrap.Card.Text>
        <coreButton id="tripPageEdit" className="coreButton position-absolute top-0 end-0" variant="primary" onClick={() => onEditClick(trip)}>
          Edit
        </coreButton>
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
}

export default TripCard;
