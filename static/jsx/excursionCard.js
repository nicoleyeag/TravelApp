function ExcursionCard({
  excursion,
  onEditClick
}) {
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

  return /*#__PURE__*/React.createElement(ReactBootstrap.Card, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, {
    className: "cardTitle"
  }, excursion.title), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    id: "wrapDesc",
    className: "cardDescription"
  }, "Description: ", excursion.description), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDate"
  }, "Start Time: ", excursion.start_time), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    className: "cardDate"
  }, "End Time: ", excursion.end_time), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, {
    id: "wrapDesc",
    className: "cardDescription"
  }, "Notes: ", excursion.excursion_type), /*#__PURE__*/React.createElement("coreButton", {
    id: "tripPageEdit",
    className: "coreButton position-absolute top-0 end-0",
    variant: "primary",
    onClick: () => onEditClick(excursion)
  }, "Edit")));
}
export default ExcursionCard;