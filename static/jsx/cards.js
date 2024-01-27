// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';
function Card({
  locationData
}) {
  const {
    name,
    photo_list
  } = locationData;
  return /*#__PURE__*/React.createElement(ReactBootstrap.Card, {
    style: {
      width: '18rem',
      height: '350px'
    }
  }, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Img, {
    variant: "top",
    src: photo_list[0].med_url,
    alt: `Photo for ${name}`,
    style: {
      width: '18rem',
      height: '150px',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, null, name), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, null, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    type: "submit"
  }, "Explore")));
}
export default Card;