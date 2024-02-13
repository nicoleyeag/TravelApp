function ProfileTripCard({
  trip
}) {
  const handleTripPage = () => {
    // Use window.location.href to navigate to the desired URL
    window.location.href = `/trip-page?trip_id=${trip.trip_id}`;
  };
  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return /*#__PURE__*/React.createElement(ReactBootstrap.Card, {
    className: "profileCard",
    style: {
      width: '22rem'
    }
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, {
    className: "cardTitle"
  }, trip.title), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDescription"
  }, trip.description), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDate"
  }, "Start Date: ", formatDate(trip.start_date)), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDate"
  }, "End Date: ", formatDate(trip.end_date)), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardBudget"
  }, "Budget: $", trip.budget), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    onClick: handleTripPage
  }, "See Trip Details")));
}
;
export default ProfileTripCard;