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
  return /*#__PURE__*/React.createElement("div", {
    className: "mid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "MyTripsText"
  }, "My Trips"), /*#__PURE__*/React.createElement("div", {
    className: "CreateTripButton"
  }, /*#__PURE__*/React.createElement("coreButton", {
    id: "createTripButton",
    className: "coreButton",
    variant: "primary",
    type: "submit",
    onClick: handleCreateTripModalShow
  }, "+"), showCreateTripModal && /*#__PURE__*/React.createElement(CreateTripForm, {
    show: showCreateTripModal,
    onHide: handleCreateTripModalHide
  })));
}
export default Mid;