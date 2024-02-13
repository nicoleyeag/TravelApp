// TripCard.js

function TripCard({
  trip,
  onEditClick
}) {
  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return /*#__PURE__*/React.createElement(ReactBootstrap.Card, {
    className: "tripCard"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, {
    className: "cardTitle"
  }, trip.title), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    id: "wrapDesc",
    className: "cardDescription"
  }, trip.description), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDate"
  }, "Start Date: ", formatDate(trip.start_date)), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDate"
  }, "End Date: ", formatDate(trip.end_date)), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardBudget"
  }, "Budget: $", trip.budget), /*#__PURE__*/React.createElement("coreButton", {
    id: "tripPageEdit",
    className: "coreButton position-absolute top-0 end-0",
    variant: "primary",
    onClick: () => onEditClick(trip)
  }, "Edit")));
}
export default TripCard;