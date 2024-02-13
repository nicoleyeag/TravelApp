function ExcursionCard({ excursion, onEditClick }) {

  // const formatDate = (dateString) => {
  //   const options = {
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: true, // Use 12-hour format
  //   };
  //   return new Date(dateString).toLocaleDateString(undefined, options);
  // };

  // const dateString = new Date(dateString)


  return (
    <ReactBootstrap.Card>
      <ReactBootstrap.Card.Body>
        <ReactBootstrap.Card.Title className="cardTitle">{excursion.title}</ReactBootstrap.Card.Title>
        <ReactBootstrap.Card.Text id="wrapDesc" className="cardDescription">Description: {excursion.description}</ReactBootstrap.Card.Text>
        <ReactBootstrap.Card.Text className="cardDate">Start Time: {(excursion.start_time)}</ReactBootstrap.Card.Text>
        <ReactBootstrap.Card.Text className="cardDate">End Time: {(excursion.end_time)}</ReactBootstrap.Card.Text>
        
        <ReactBootstrap.Card.Text id="wrapDesc" className="cardDescription">Notes: {excursion.excursion_type}</ReactBootstrap.Card.Text>
          {/* Add other excursion details as needed */}

        <coreButton id="tripPageEdit" className="coreButton position-absolute top-0 end-0" variant="primary" onClick={() => onEditClick(excursion)}>
          Edit
        </coreButton>
      </ReactBootstrap.Card.Body>
    </ReactBootstrap.Card>
  );
}

export default ExcursionCard;
