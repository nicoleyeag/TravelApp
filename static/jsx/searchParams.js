import Buttons from '/static/jsx/coreButton.js';
function SearchParams({
  handleSubmitParams
}) {
  console.log('handleSubmitParams called');
  // ... rest of the code

  return /*#__PURE__*/React.createElement(ReactBootstrap.Accordion, {
    defaultActiveKey: "0",
    className: "search-params-container"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Accordion.Item, {
    eventKey: "0"
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Accordion.Header, null, "Search Parameters"), /*#__PURE__*/React.createElement(ReactBootstrap.Accordion.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Form.Label, null, "Location"), /*#__PURE__*/React.createElement(ReactBootstrap.Form.Control, {
    type: "location",
    id: "searchQuery",
    style: {
      width: '100%'
    },
    name: "searchQuery"
  }), /*#__PURE__*/React.createElement("coreButton", {
    style: {
      marginTop: '10px'
    },
    className: "coreButton",
    type: "submit",
    onClick: handleSubmitParams
  }, "Submit"))));
}
export default SearchParams;