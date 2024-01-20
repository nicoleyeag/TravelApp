import Buttons from '/static/jsx/coreButton.js';
import Card from '/static/jsx/cards.js';
function MyTrips() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My Trips"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    }
  }, /*#__PURE__*/React.createElement(BasicExample, null), /*#__PURE__*/React.createElement(BasicExample, null)));
}
function BasicExample() {
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      width: '18rem',
      margin: '10px'
    }
  }, /*#__PURE__*/React.createElement(Card.Img, {
    variant: "top",
    src: "holder.js/100px180"
  }), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, null, "Card Title"), /*#__PURE__*/React.createElement(Card.Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Go somewhere")));
}
export default MyTrips;