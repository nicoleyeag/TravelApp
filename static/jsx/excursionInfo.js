function ExcursionCard({
  excursion
}) {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Card, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, null, excursion.title), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, null, /*#__PURE__*/React.createElement("p", null, "Start Time: ", excursion.start_time), /*#__PURE__*/React.createElement("p", null, "End Time: ", excursion.end_time), /*#__PURE__*/React.createElement("p", null, "Description: ", excursion.description))));
}
export default ExcursionCard;