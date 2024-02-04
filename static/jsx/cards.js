// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

import Buttons from '/static/jsx/coreButton.js';
import CombinedComponent from '/static/jsx/addTOtrip.js';
function Card({
  locationData
}) {
  const {
    name,
    photo_list,
    description
  } = locationData;
  const handleSelectTrip = selectedTripId => {
    console.log("Selected Trip ID:", selectedTripId);
    // Handle the selected trip logic if needed
  };
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
  }), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Body, null, /*#__PURE__*/React.createElement(ReactBootstrap.Card.Title, null, name), /*#__PURE__*/React.createElement(ReactBootstrap.Card.Text, null, description), /*#__PURE__*/React.createElement("coreButton", {
    className: "coreButton",
    type: "submit"
  }, "Read More"), /*#__PURE__*/React.createElement(CombinedComponent
  // passing the locationData
  , {
    locationData: locationData,
    onSelectTrip: handleSelectTrip
  })));
}
export default Card;