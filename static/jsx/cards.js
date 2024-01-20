// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';
function Card() {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Card, {
    style: {
      width: '18rem'
    }
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Img, {
    variant: "top",
    src: "holder.js/100px180"
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, null, "Card Title"), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/React.createElement(ReactBootstrap.Button, {
    variant: "primary"
  }, "Go somewhere")));
}
export default Card;